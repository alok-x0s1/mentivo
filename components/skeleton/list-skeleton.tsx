import { Skeleton } from "@/components/ui/skeleton";

export function ListSkeleton({ count = 4 }: { count?: number }) {
	return (
		<div className="space-y-3">
			{Array.from({ length: count }).map((_, i) => (
				<div key={i} className="flex items-center gap-4">
					<Skeleton className="h-10 w-10 rounded-full" />
					<div className="space-y-2 flex-1">
						<Skeleton className="h-4 w-32" />
						<Skeleton className="h-3 w-48" />
					</div>
				</div>
			))}
		</div>
	);
}
