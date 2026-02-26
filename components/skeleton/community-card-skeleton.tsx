import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function CommunityCardSkeleton() {
	return (
		<Card>
			<CardHeader>
				<Skeleton className="h-5 w-32" />
				<Skeleton className="h-4 w-full" />
			</CardHeader>

			<CardContent>
				<Skeleton className="h-4 w-3/4" />
			</CardContent>

			<CardFooter>
				<Skeleton className="h-9 w-full" />
			</CardFooter>
		</Card>
	);
}
