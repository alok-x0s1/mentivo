import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function ErrorCard({
	message,
	onRetry,
}: {
	message: string;
	onRetry?: () => void;
}) {
	return (
		<Card className="border-destructive">
			<CardHeader>
				<CardTitle className="text-destructive">
					Something went wrong 🚨
				</CardTitle>
			</CardHeader>
			<CardContent className="space-y-3">
				<p className="text-sm text-muted-foreground">{message}</p>
				{onRetry && (
					<Button variant="destructive" onClick={onRetry}>
						Try Again
					</Button>
				)}
			</CardContent>
		</Card>
	);
}
