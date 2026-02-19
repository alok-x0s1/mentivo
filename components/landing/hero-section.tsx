import { CornerUpRight, Lightbulb, SparkleIcon } from "lucide-react";
import Link from "next/link";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { MotionDiv } from "../ui/motion-div";
import { HeroGradient } from "./background-gradient";

export default function HeroSection() {
	return (
		<section className="relative overflow-hidden">
			<HeroGradient />
			<div className="relative section-container section-padding">
				<div className="text-center">
					<Badge
						className="mb-6 text-sm font-medium p-3 tracking-tight"
						variant="secondary"
					>
						Powered by AI{" "}
						<SparkleIcon className="size-4 inline-block ml-1" />
					</Badge>
					<h1>
						Find Your Perfect{" "}
						<span className="block gradient-text">
							AI Learning Partner
						</span>
					</h1>
					<p className="hero-subheading">
						Join communities, set your learning goals, and get
						matched with partners who share your passion. Chat,
						collaborate, and grow together with AI-powered insights.
					</p>
					<div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
						<MotionDiv
							initial={{ opacity: 0, y: 20 }}
							transition={{ duration: 0.5, delay: 0.2 }}
							animate={{ opacity: 1, y: 0 }}
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
						>
							<Link href="/sign-up">
								<Button
									size="lg"
									className="link-button hero-button-outline group"
								>
									<span className="hero-button-content">
										<CornerUpRight className="hero-button-icon-outline group-hover:-rotate-12 group-hover:text-primary" />
										<span className="hero-button-text">
											Get Started
										</span>
									</span>
								</Button>
							</Link>
						</MotionDiv>
						<MotionDiv
							initial={{ opacity: 0, y: 20 }}
							transition={{ duration: 0.5, delay: 0.3 }}
							animate={{ opacity: 1, y: 0 }}
							whileHover={{ scale: 1.08, y: -2 }}
							whileTap={{ scale: 0.95 }}
						>
							<Link href="/#pricing">
								<Button
									size="lg"
									className="link-button hero-button-primary group"
								>
									<span className="hero-button-content">
										<Lightbulb className="hero-button-icon-primary group-hover:scale-125" />
										Buy a Plan
									</span>
								</Button>
							</Link>
						</MotionDiv>
					</div>
				</div>
			</div>
		</section>
	);
}
