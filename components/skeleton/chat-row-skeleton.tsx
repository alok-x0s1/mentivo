import { Skeleton } from "@/components/ui/skeleton";

export function ChatRowSkeleton() {
	return (
		<div className="flex items-center gap-4 p-4 border rounded-md">
			<Skeleton className="h-10 w-10 rounded-full" />
			<div className="flex-1 space-y-2">
				<Skeleton className="h-4 w-32" />
				<Skeleton className="h-3 w-48" />
			</div>
		</div>
	);
}
