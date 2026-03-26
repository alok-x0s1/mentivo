import { BackgroundGradient } from "@/components/landing/background-gradient";
import { MotionDiv } from "@/components/ui/motion-div";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { HomeIcon, SearchIcon, SparkleIcon, GhostIcon } from "lucide-react";

export default function NotFound() {
	return (
		<div className="relative min-h-screen">
			<BackgroundGradient />

			<div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4">
				<MotionDiv
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className="text-center max-w-2xl mx-auto"
				>
					<MotionDiv
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.3 }}
						className="mb-6 flex justify-center items-center w-full"
					>
						<GhostIcon className="w-16 h-16" />
					</MotionDiv>

					<MotionDiv
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.4 }}
						className="mb-8"
					>
						<h2 className="text-3xl sm:text-4xl font-bold mb-4">
							Lost in{" "}
							<span className="gradient-text">
								Learning Space
							</span>
							?
						</h2>
					</MotionDiv>

					<MotionDiv
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.5 }}
						className="mb-12"
					>
						<p className="text-lg text-muted-foreground max-w-lg mx-auto">
							Oops! The learning path you&apos;re looking for
							seems to have vanished. But don&apos;t worry - every
							great journey has its detours!
						</p>
					</MotionDiv>

					<MotionDiv
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.6 }}
						className="flex flex-col sm:flex-row gap-4 justify-center items-center"
					>
						<Link href="/">
							<Button
								size="lg"
								className="link-button hero-button-primary group"
							>
								<span className="hero-button-content">
									<HomeIcon className="hero-button-icon-primary group-hover:scale-110" />
									<span className="hero-button-text font-medium">
										Back to Home
									</span>
								</span>
							</Button>
						</Link>

						{/* <Button
							size="lg"
							variant="outline"
							className="link-button hero-button-outline group"
							// onClick={() => window.history.back()}
						>
							<span className="hero-button-content">
								<ArrowLeftIcon className="hero-button-icon-outline group-hover:-translate-x-1" />
								<span className="hero-button-text">
									Go Back
								</span>
							</span>
						</Button> */}
					</MotionDiv>

					<MotionDiv
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 1, delay: 0.8 }}
						className="absolute top-20 left-20 text-6xl"
					>
						<SparkleIcon className="w-16 h-16 text-primary/10 animate-pulse" />
					</MotionDiv>

					<MotionDiv
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 1, delay: 1 }}
						className="absolute bottom-20 right-20 text-6xl"
					>
						<SearchIcon className="w-16 h-16 text-foreground/10 animate-pulse" />
					</MotionDiv>
				</MotionDiv>

				<div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/50 rounded-full blur-3xl animate-pulse" />
				<div
					className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-foreground/10 rounded-full blur-3xl animate-pulse"
					style={{ animationDelay: "1s" }}
				/>
			</div>
		</div>
	);
}
