import { PricingTable } from "@clerk/nextjs";
import SectionHeading from "./section-heading";

export default function PricingSection() {
	return (
		<section className="section-container section-padding" id="pricing">
			<SectionHeading
				title="Flexible Plans for Every Learner"
				description="Pick the plan that's right for you and scale up whenever you need additional features."
			/>
			<div className="max-w-6xl mx-auto">
				<PricingTable />
			</div>
		</section>
	);
}
