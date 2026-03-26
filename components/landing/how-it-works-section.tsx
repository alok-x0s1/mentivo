import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";
import SectionHeading from "./section-heading";

const steps = [
	{
		title: "Join a Community",
		description:
			"Explore communities that align with your interests and learning objectives.",
	},
	{
		title: "Set Your Goals",
		description:
			"Share what you're learning, your current skill level, and the goals you want to achieve.",
	},
	{
		title: "Get Matched",
		description:
			"Our AI connects you with learners who have similar interests, goals, and learning paths.",
	},
	{
		title: "Learn Together",
		description:
			"Chat, collaborate, schedule study sessions, and stay motivated while making progress together.",
	},
];

export default function HowItWorksSection() {
	return (
		<section className="section-padding">
			<div className="section-container">
				<SectionHeading
					title="How Mentivo Works"
					description="Follow four simple steps to connect with the right learning partner and grow together."
				/>
				<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
					{steps.map((step, idx) => (
						<Card
							key={idx}
							className="hover:scale-105 transition-all duration-300"
						>
							<CardHeader>
								<div className="flex justify-center mb-4">
									<div className="step-number">{idx + 1}</div>
								</div>

								<CardTitle className="text-center">
									{step.title}
								</CardTitle>
								<CardDescription className="text-center">
									{step.description}
								</CardDescription>
							</CardHeader>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}
