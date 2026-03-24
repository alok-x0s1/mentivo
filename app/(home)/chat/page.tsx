"use client";

import { ErrorCard } from "@/components/layout/error-card";
import { ChatRowSkeleton } from "@/components/skeleton/chat-row-skeleton";
import { MatchCardSkeleton } from "@/components/skeleton/match-card-skeleton";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UserAvatar } from "@/components/ui/user-avatar";
import { useAcceptMatch, useMatches } from "@/hooks/use-ai-partner";
import { useCurrentUser } from "@/hooks/use-user";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ChatPage() {
	const {
		data: matches,
		isLoading: isLoadingMatches,
		error: errorMatches,
	} = useMatches();
	const [acceptingId, setAcceptingId] = useState<string | null>(null);

	const { data: user } = useCurrentUser();
	const isPro = user?.isPro;

	const router = useRouter();

	const acceptMatchMutation = useAcceptMatch();

	const acceptedMatches = matches?.filter(
		(match) => match.status === "accepted",
	);
	const pendingMatches = matches?.filter(
		(match) => match.status === "pending",
	);

	let pendingMatchesToShow = [];
	if (!isPro) {
		pendingMatchesToShow = pendingMatches?.slice(0, 1) || [];
	} else {
		pendingMatchesToShow = pendingMatches || [];
	}

	const handleAccept = async (id: string) => {
		try {
			setAcceptingId(id);
			await acceptMatchMutation.mutateAsync(id);
		} finally {
			setAcceptingId(null);
		}
	};

	return (
		<div className="page-wrapper">
			<h2 className="text-2xl font-semibold">Pending Matches</h2>

			<div className="flex gap-4 overflow-x-auto">
				{isLoadingMatches ? (
					Array.from({ length: 3 }).map((_, i) => (
						<MatchCardSkeleton key={i} />
					))
				) : errorMatches ? (
					<ErrorCard
						message={
							errorMatches.message || "Internal Server Error"
						}
					/>
				) : pendingMatchesToShow.length === 0 ? (
					<Card className="w-full border h-50 flex justify-center items-center">
						<CardContent className="p-6 text-center text-foreground/80 text-base">
							No pending matches yet 🤝 <br />
							Try joining more communities or adding goals.
						</CardContent>
					</Card>
				) : (
					pendingMatchesToShow.map((match) => {
						const isThisAccepting = acceptingId === match.id;

						const partner = {
							id: match.partner.id || "",
							name: match.partner.name || "Partner",
							imageUrl: match.partner.imageUrl ?? undefined,
						};

						return (
							<Card
								key={match.id}
								className="flex flex-col max-h-125 min-w-87.5 border"
							>
								<CardHeader>
									<div className="flex items-center gap-3 mb-2">
										<UserAvatar
											name={partner.name}
											imageUrl={partner.imageUrl}
										/>
										<div className="flex-1">
											<CardTitle className="text-lg truncate">
												{partner.name}
											</CardTitle>
											{match.community && (
												<p className="text-sm text-muted-foreground">
													{match.community.name}
												</p>
											)}
										</div>
									</div>
								</CardHeader>

								<CardContent className="flex flex-col flex-1 space-y-2">
									<div className="flex-1 overflow-y-auto">
										{match.partnerGoals &&
											match.partnerGoals.length > 0 && (
												<div>
													<p className="text-xs font-medium text-muted-foreground mb-2">
														Their Learning Goals:
													</p>
													<div className="space-y-2 flex gap-1 flex-wrap">
														{match.partnerGoals.map(
															(g) => (
																<Badge
																	key={g.id}
																	variant="secondary"
																	className="text-xs"
																>
																	{g.title}
																</Badge>
															),
														)}
													</div>
												</div>
											)}
									</div>

									<Button
										className="w-full"
										onClick={() => handleAccept(match.id)}
										disabled={isThisAccepting}
									>
										{isThisAccepting
											? "Accepting..."
											: "Accept & Start Chatting"}
									</Button>
								</CardContent>
							</Card>
						);
					})
				)}
			</div>

			<h2 className="text-2xl font-semibold">Active Chats</h2>

			<div className="flex flex-col gap-4">
				{isLoadingMatches ? (
					Array.from({ length: 4 }).map((_, i) => (
						<ChatRowSkeleton key={i} />
					))
				) : errorMatches ? (
					<ErrorCard message={errorMatches.message} />
				) : !acceptedMatches || acceptedMatches.length === 0 ? (
					<Card className="w-full border h-50 flex justify-center items-center">
						<CardContent className="p-6 text-center text-foreground/80 text-base">
							No active chats yet 💬 <br />
							Accept a match to start chatting.
						</CardContent>
					</Card>
				) : (
					acceptedMatches.map((match) => {
						const partner = {
							id: match.partner.id || "",
							name: match.partner.name || "Partner",
							imageUrl: match.partner.imageUrl ?? undefined,
						};
						return (
							<Card
								key={match.id}
								className="flex w-full cursor-pointer hover:bg-accent transition-colors duration-200"
								onClick={() => router.push(`/chat/${match.id}`)}
							>
								<CardContent className="flex flex-col items-start gap-2 p-4">
									<div className="flex gap-4 items-center">
										<UserAvatar
											name={partner.name}
											imageUrl={partner.imageUrl}
										/>
										<div className="flex flex-col">
											<CardTitle className="text-md truncate font-semibold">
												{match.partner.name}
											</CardTitle>
											{match.community && (
												<p className="text-sm text-muted-foreground truncate font-medium">
													{match.community.name}
												</p>
											)}
										</div>
									</div>
									<div className="flex-1">
										<div className="flex flex-col gap-1 mt-1">
											{match.userGoals && (
												<span className="text-sm text-muted-foreground">
													Your goals:{" "}
													{match.userGoals
														.map((g) => g.title)
														.join(", ")}
												</span>
											)}
											{match.partnerGoals &&
												match.partnerGoals.length >
													0 && (
													<span className="text-xs text-muted-foreground">
														Their goals:{" "}
														{match.partnerGoals
															.map((g) => g.title)
															.join(", ")}
													</span>
												)}
										</div>
									</div>
								</CardContent>
							</Card>
						);
					})
				)}
			</div>
		</div>
	);
}
