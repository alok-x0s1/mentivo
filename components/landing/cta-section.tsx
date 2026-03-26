import { Button } from "../ui/button";
import Link from "next/link";

export default function CtaSection() {
	return (
		<section className="section-container section-padding">
			<div className="border-dashed border border-foreground/50 rounded-md p-8 sm:p-12 text-center">
				<div className="max-w-2xl mx-auto">
					<h2>Learn Better Together</h2>
					<p className="text-lg mb-8">
						Connect with people on the same learning journey,
						support each other, and achieve your goals faster.
					</p>
					<Link href="/sign-up">
						<Button size="lg" className="px-6 py-5 font-medium">
							Try it for free
						</Button>
					</Link>
				</div>
			</div>
		</section>
	);
}
