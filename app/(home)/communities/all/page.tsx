"use client";

import { Button } from "@/components/ui/button";
import {
	Card,
	CardDescription,
	CardHeader,
	CardTitle,
	CardFooter,
} from "@/components/ui/card";
import { ArrowLeftIcon, CheckIcon, Loader2, LockIcon } from "lucide-react";
import Link from "next/link";
import {
	useAllCommunities,
	useCommunities,
	useJoinCommunity,
} from "@/hooks/use-communities";
import { toast } from "sonner";
import { useCurrentUser } from "@/hooks/use-user";
import { useState } from "react";
import { ErrorCard } from "@/components/layout/error-card";
import { CommunityCardSkeleton } from "@/components/skeleton/community-card-skeleton";

export default function AllCommunitiesPage() {
	const [joiningId, setJoiningId] = useState<string | null>(null);

	const {
		data: allCommunities,
		isLoading: isLoadingAllCommunities,
		error: errorAllCommunities,
	} = useAllCommunities();

	const { data: user } = useCurrentUser();
	const isPro = user?.isPro;

	const { data: userCommunities } = useCommunities();
	const numberOfCommunities = userCommunities?.length || 0;

	const isJoined = (communityId: string) => {
		return userCommunities?.some(
			(community) => community.community.id === communityId,
		);
	};

	const showLockIcon = numberOfCommunities >= 3 && !isPro;

	const joinCommunityMutation = useJoinCommunity();

	const handleJoinCommunity = async (communityId: string) => {
		try {
			setJoiningId(communityId);

			await joinCommunityMutation.mutateAsync(communityId);
			toast.success("Joined community successfully");
		} catch (error) {
			console.error(error);
			toast.error("Failed to join community");
		} finally {
			setJoiningId(null);
		}
	};

	return (
		<div>
			<Link href="/communities">
				<Button variant={"outline"}>
					<ArrowLeftIcon className="size-4" />
					My Communities
				</Button>
			</Link>
			<div className="space-y-4 mt-4">
				<h2 className="text-2xl font-bold"> Browse Communities</h2>
				<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
					{isLoadingAllCommunities ? (
						Array.from({ length: 6 }).map((_, i) => (
							<CommunityCardSkeleton key={i} />
						))
					) : errorAllCommunities ? (
						<div className="col-span-full">
							<ErrorCard
								message={
									(errorAllCommunities as Error)?.message ??
									"Internal Server Error"
								}
							/>
						</div>
					) : (
						allCommunities?.map((community) => {
							const isThisJoining = joiningId === community.id;

							return (
								<Card key={community.id}>
									<CardHeader className="flex-1">
										<CardTitle>{community.name}</CardTitle>
										<CardDescription>
											{community.description}
										</CardDescription>
									</CardHeader>

									<CardFooter className="mt-2">
										<Button
											className="w-full"
											disabled={
												isJoined(community.id) ||
												showLockIcon ||
												isThisJoining
											}
											onClick={() =>
												handleJoinCommunity(
													community.id,
												)
											}
										>
											{isThisJoining ? (
												<>
													<Loader2 className="mr-2 size-4 animate-spin" />
													Joining community...
												</>
											) : isJoined(community.id) ? (
												<>
													<CheckIcon className="size-4 mr-1" />
													Joined
												</>
											) : (
												<>
													{showLockIcon && (
														<LockIcon className="size-4 mr-1" />
													)}
													Join Community
												</>
											)}
										</Button>
									</CardFooter>
								</Card>
							);
						})
					)}
				</div>
			</div>
		</div>
	);
}
