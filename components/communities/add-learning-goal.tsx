import { LockIcon, PlusIcon, Loader2 } from "lucide-react";
import { Button } from "../ui/button";
import { useState } from "react";
import { useCreateLearningGoal } from "@/hooks/use-goals";
import { Textarea } from "../ui/textarea";
import { toast } from "sonner";

export default function AddLearningGoal({
	selectedCommunityId,
	showLockIcon,
}: {
	selectedCommunityId: string | null;
	showLockIcon: boolean;
}) {
	const [showNewGoalForm, setShowNewGoalForm] = useState(false);
	const [newGoalText, setNewGoalText] = useState("");
	const createGoalMutation = useCreateLearningGoal();

	const handleCreateGoal = async () => {
		if (!selectedCommunityId) {
			toast.error("Please select a community first");
			return;
		}

		try {
			await createGoalMutation.mutateAsync({
				communityId: selectedCommunityId,
				title: newGoalText.slice(0, 25),
				description: newGoalText,
				tags: [],
			});

			setNewGoalText("");
			setShowNewGoalForm(false);
			toast.success("Goal added successfully 🎯");
		} catch (error) {
			toast.error("Failed to create learning goal");
			console.error("Error creating learning goal", error);
		}
	};

	return (
		<div>
			{showNewGoalForm ? (
				<div className="space-y-3 pt-3 border-t">
					<Textarea
						placeholder="What do you want to learn?"
						value={newGoalText}
						onChange={(e) => setNewGoalText(e.target.value)}
						rows={4}
						className="resize-none"
					/>

					<div className="flex gap-2">
						<Button
							size="sm"
							className="px-4 w-32"
							onClick={handleCreateGoal}
							disabled={
								createGoalMutation.isPending ||
								newGoalText.trim().length === 0 ||
								showLockIcon
							}
						>
							{createGoalMutation.isPending ? (
								<>
									<Loader2 className="mr-2 size-4 animate-spin" />
									Adding...
								</>
							) : (
								"Add Goal"
							)}
						</Button>

						<Button
							size="sm"
							className="px-4"
							variant="outline"
							onClick={() => setShowNewGoalForm(false)}
							disabled={createGoalMutation.isPending}
						>
							Cancel
						</Button>
					</div>
				</div>
			) : (
				<Button
					variant="outline"
					className="w-full"
					onClick={() => {
						setShowNewGoalForm(true);
					}}
					disabled={showLockIcon}
				>
					{showLockIcon && (
						<LockIcon className="size-4 text-muted-foreground" />
					)}
					{!showLockIcon && <PlusIcon className="size-3" />} Add
					Learning Goal
				</Button>
			)}
		</div>
	);
}
