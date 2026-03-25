import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function MatchCardSkeleton() {
	return (
		<Card className="min-w-87.5 border">
			<CardHeader>
				<div className="flex items-center gap-3">
					<Skeleton className="h-10 w-10 rounded-full" />
					<div className="space-y-2 flex-1">
						<Skeleton className="h-4 w-24" />
						<Skeleton className="h-3 w-32" />
					</div>
				</div>
			</CardHeader>
			<CardContent className="space-y-3">
				<Skeleton className="h-4 w-full" />
				<Skeleton className="h-4 w-3/4" />
				<Skeleton className="h-9 w-full" />
			</CardContent>
		</Card>
	);
}
