import { LockIcon, PlusIcon, Loader2 } from "lucide-react";
import { Button } from "../ui/button";
import { useState } from "react";
import { useCreateLearningGoal } from "@/hooks/use-goals";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "../ui/textarea";
import { toast } from "sonner";

export default function AddLearningGoal({
	selectedCommunityId,
	showLockIcon,
}: {
	selectedCommunityId: string | null;
	showLockIcon: boolean;
}) {
	const [open, setOpen] = useState(false);

	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");

	const isValid =
		title.trim().length >= 5 &&
		title.trim().length <= 30 &&
		description.trim().length >= 20 &&
		description.trim().length <= 300;

	const createGoalMutation = useCreateLearningGoal();

	// const handleCreateGoal = async () => {
	// 	if (!selectedCommunityId) {
	// 		toast.error("Please select a community first");
	// 		return;
	// 	}

	// 	try {
	// 		await createGoalMutation.mutateAsync({
	// 			communityId: selectedCommunityId,
	// 			title: newGoalText.slice(0, 25),
	// 			description: newGoalText,
	// 			tags: [],
	// 		});

	// 		setNewGoalText("");
	// 		setShowNewGoalForm(false);
	// 		toast.success("Goal added successfully 🎯");
	// 	} catch (error) {
	// 		toast.error("Failed to create learning goal");
	// 		console.error("Error creating learning goal", error);
	// 	}
	// };

	const handleCreateGoal = async () => {
		if (!selectedCommunityId) {
			toast.error("Please join or select a community first");
			return;
		}

		try {
			await createGoalMutation.mutateAsync({
				communityId: selectedCommunityId,
				title,
				description,
				tags: [],
			});

			toast.success("Goal added successfully 🎯");

			setTitle("");
			setDescription("");

			setOpen(false);
		} catch {
			toast.error("Failed to create learning goal");
		}
	};
	return (
		<div>
			{/* {showNewGoalForm ? (
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
			)} */}

			<Button
				variant="outline"
				className="w-full h-10 flex items-center"
				onClick={() => setOpen(true)}
				disabled={showLockIcon}
			>
				{showLockIcon ? (
					<LockIcon className="size-4" />
				) : (
					<PlusIcon className="size-4" />
				)}
				Add Learning Goal
			</Button>

			<Dialog
				open={open}
				onOpenChange={(value) => {
					if (createGoalMutation.isPending) return;

					setOpen(value);
				}}
			>
				<DialogContent
					className="sm:max-w-md"
					onInteractOutside={(e) => {
						if (createGoalMutation.isPending) {
							e.preventDefault();
						}
					}}
				>
					<DialogHeader>
						<DialogTitle>Add Learning Goal</DialogTitle>

						<DialogDescription>
							Tell us what you&apos;re currently learning.
						</DialogDescription>
					</DialogHeader>

					<div className="space-y-4">
						<div className="space-y-2">
							<label className="text-sm font-medium">Title</label>

							<Input
								value={title}
								onChange={(e) => setTitle(e.target.value)}
								maxLength={30}
								placeholder="e.g. Learn React"
								className="mt-2"
							/>

							<div className="flex justify-between text-xs">
								<span
									className={
										title.length > 0 && title.length < 5
											? "text-destructive"
											: "text-muted-foreground"
									}
								>
									Minimum 5 characters
								</span>

								<span className="text-muted-foreground">
									{title.length}/30
								</span>
							</div>
						</div>

						<div className="space-y-2">
							<label className="text-sm font-medium">
								Description
							</label>

							<Textarea
								rows={5}
								value={description}
								onChange={(e) => setDescription(e.target.value)}
								maxLength={300}
								className="mt-2"
								placeholder="Describe what you're learning..."
							/>

							<div className="flex justify-between text-xs">
								<span
									className={
										description.length > 0 &&
										description.length < 20
											? "text-destructive"
											: "text-muted-foreground"
									}
								>
									Minimum 20 characters
								</span>

								<span className="text-muted-foreground">
									{description.length}/300
								</span>
							</div>
						</div>

						<div className="flex justify-end gap-2 pt-2">
							<Button
								variant="outline"
								className="px-4"
								onClick={() => setOpen(false)}
								disabled={createGoalMutation.isPending}
							>
								Cancel
							</Button>

							<Button
								onClick={handleCreateGoal}
								className="px-4 w-32"
								disabled={
									!isValid || createGoalMutation.isPending || showLockIcon
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
						</div>
					</div>
				</DialogContent>
			</Dialog>
		</div>
	);
}
