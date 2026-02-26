"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { UserButton, useUser } from "@clerk/nextjs";
import {
	LayoutDashboard,
	MessageCircle,
	TrophyIcon,
	Users,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Badge } from "../ui/badge";

export default function Header({ isPro }: { isPro: boolean }) {
	const { isSignedIn } = useUser();
	const pathname = usePathname();

	return (
		<header>
			<div className="layout-container">
				<div className="flex items-center gap-6">
					<Link href="/" className="font-bold text-xl space-x-2">
						Mentivo
					</Link>

					{isSignedIn && (
						<nav className="hidden md:flex items-center gap-6">
							<Link href="/dashboard">
								<Button
									variant={
										pathname === "/dashboard"
											? "outline"
											: "ghost"
									}
								>
									<LayoutDashboard className="size-4 text-primary" />
									Dashboard
								</Button>
							</Link>
							<Link href="/communities">
								<Button
									variant={
										pathname === "/communities"
											? "outline"
											: "ghost"
									}
								>
									<Users
										className={cn("size-4 text-primary")}
									/>
									Communities
								</Button>
							</Link>
							<Link href="/chat">
								<Button
									variant={
										pathname === "/chat"
											? "outline"
											: "ghost"
									}
								>
									<MessageCircle className="size-4 text-primary" />
									Chat
								</Button>
							</Link>
						</nav>
					)}
				</div>
				<div className="flex items-center gap-4">
					{isSignedIn ? (
						<>
							{isPro ? (
								<Badge
									className="flex items-center gap-2"
									variant="outline"
								>
									<TrophyIcon className="size-3 text-primary" />
									Pro
								</Badge>
							) : (
								"Free"
							)}
							<UserButton
								appearance={{
									elements: {
										avatarBox: "size-9",
									},
								}}
							/>
						</>
					) : (
						<div className="flex items-center gap-2">
							<Link href="/sign-in">
								<Button variant="ghost">Sign In</Button>
							</Link>
							<Link href="/sign-up">
								<Button>Sign Up</Button>
							</Link>
						</div>
					)}
				</div>
			</div>
		</header>
	);
}
