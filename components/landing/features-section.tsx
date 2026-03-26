import { Globe, MessageSquare, Sparkle, Target, Users, Zap } from "lucide-react";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";
import SectionHeading from "./section-heading";

const features = [
	{
		title: "Smart Partner Matching",
		description:
			"Our AI analyzes your goals, interests, and skill level to connect you with learners who are the right fit.",
		icon: <Users className="h-6 w-6 text-primary" />,
	},
	{
		title: "Real-Time Conversations",
		description:
			"Chat seamlessly with your learning partners, share resources, schedule sessions, and stay connected.",
		icon: <MessageSquare className="h-6 w-6 text-primary" />,
	},
	{
		title: "AI-Powered Summaries",
		description:
			"Receive intelligent summaries, key takeaways, and action items after every conversation.",
		icon: <Sparkle className="h-6 w-6 text-primary" />,
	},
	{
		title: "Goal Tracking",
		description:
			"Set learning objectives, monitor your progress, and stay focused on achieving meaningful milestones.",
		icon: <Target className="h-6 w-6 text-primary" />,
	},
	{
		title: "Learning Communities",
		description:
			"Join communities built around shared interests, skills, and topics to learn alongside like-minded people.",
		icon: <Globe className="h-6 w-6 text-primary" />,
	},
	{
		title: "Quick & Easy Setup",
		description:
			"Create your profile, define your goals, and start connecting with learners in just a few minutes.",
		icon: <Zap className="h-6 w-6 text-primary" />,
	},
];

export default function FeaturesSection() {
	return (
		<section className="section-container ">
			<div className="section-padding">
				<SectionHeading
					title="Everything You Need for Collaborative Learning"
					description="Designed to help you find compatible learning partners, build meaningful connections, and achieve your goals together."
				/>
				<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
					{features.map((feature, idx) => (
						<Card
							key={idx}
							className="border-2 hover:border-primary/50 transition-colors"
						>
							<CardHeader>
								<div className="feature-icon mb-4">
									{feature.icon}
								</div>
								<CardTitle>{feature.title}</CardTitle>
								<CardDescription>
									{feature.description}
								</CardDescription>
							</CardHeader>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}
