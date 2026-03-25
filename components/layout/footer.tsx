import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import {
	AwardIcon,
	BookOpenIcon,
	BotIcon,
	BriefcaseIcon,
	Building2Icon,
	CircleHelpIcon,
	CookieIcon,
	FileTextIcon,
	GraduationCapIcon,
	HelpCircleIcon,
	LightbulbIcon,
	LockIcon,
	MailIcon,
	MegaphoneIcon,
	MessageSquareMoreIcon,
	NewspaperIcon,
	ScaleIcon,
	ShieldCheckIcon,
	TrophyIcon,
	UsersIcon,
	TwitterIcon,
	GithubIcon,
	LinkedinIcon,
} from "lucide-react";
import NewsLetter from "./newsletter";

const footerLinks = {
	product: [
		{ href: "#features", label: "Features", icon: LightbulbIcon },
		{ href: "#pricing", label: "Pricing", icon: TrophyIcon },
		{ href: "/communities", label: "Communities", icon: UsersIcon },
		{ href: "/chat", label: "AI Chat", icon: BotIcon },
	],

	learning: [
		{ href: "/courses", label: "Courses", icon: BookOpenIcon },
		{ href: "/tutorials", label: "Tutorials", icon: GraduationCapIcon },
		{ href: "/resources", label: "Resources", icon: FileTextIcon },
		{ href: "/certificates", label: "Certificates", icon: AwardIcon },
	],

	company: [
		{ href: "/about", label: "About Us", icon: Building2Icon },
		{ href: "/careers", label: "Careers", icon: BriefcaseIcon },
		{ href: "/blog", label: "Blog", icon: NewspaperIcon },
		{ href: "/press", label: "Press", icon: MegaphoneIcon },
	],

	support: [
		{ href: "/help", label: "Help Center", icon: HelpCircleIcon },
		{ href: "/contact", label: "Contact Us", icon: MailIcon },
		{ href: "/faq", label: "FAQ", icon: CircleHelpIcon },
		{ href: "/feedback", label: "Feedback", icon: MessageSquareMoreIcon },
	],

	legal: [
		{ href: "/privacy", label: "Privacy Policy", icon: LockIcon },
		{ href: "/terms", label: "Terms of Service", icon: ScaleIcon },
		{ href: "/cookies", label: "Cookie Policy", icon: CookieIcon },
		{ href: "/gdpr", label: "GDPR", icon: ShieldCheckIcon },
	],
};

const socialLinks = [
	{
		href: "https://twitter.com/alokdotcom",
		label: "Twitter",
		icon: TwitterIcon,
	},
	{ href: "https://github.com/alok-x0s1", label: "GitHub", icon: GithubIcon },
	{
		href: "https://linkedin.com/in/alok-x0s1",
		label: "LinkedIn",
		icon: LinkedinIcon,
	},
	{ href: "mailto:yalok6321@gamil.com", label: "Email", icon: MailIcon },
];

export default function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="border-t bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
			<div className="page-wrapper min-h-fit!">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
					<div className="lg:col-span-2">
						<div className="mb-6">
							<Link
								href="/"
								className="inline-flex items-center gap-2 mb-4"
							>
								<div className="w-8 h-8 bg-linear-to-r from-primary to-primary/80 rounded-lg flex items-center justify-center">
									<GraduationCapIcon className="w-5 h-5 text-primary-foreground" />
								</div>
								<span className="font-bold text-xl">
									Mentivo
								</span>
							</Link>
							<p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
								Your intelligent learning companion. Join
								communities, connect with compatible learning
								partners, and accelerate your growth with
								personalized AI-driven experiences.
							</p>
						</div>

						<div className="flex gap-3 mb-6">
							{socialLinks.map((social) => (
								<Button
									key={social.label}
									variant="ghost"
									size="icon"
									className="h-9 w-9 rounded-lg hover:bg-primary/10 hover:text-primary transition-colors"
									asChild
								>
									<Link
										href={social.href}
										target="_blank"
										rel="noopener noreferrer"
									>
										<social.icon className="w-4 h-4" />
										<span className="sr-only">
											{social.label}
										</span>
									</Link>
								</Button>
							))}
						</div>

						<Badge
							variant="secondary"
							className="inline-flex items-center gap-2 px-3 py-1.5"
						>
							Made with ❤️ for learners
						</Badge>
					</div>

					<div>
						<h3 className="font-semibold text-sm text-foreground mb-4">
							Product
						</h3>
						<ul className="space-y-3">
							{footerLinks.product.map((link) => (
								<li key={link.href}>
									<Link
										href={link.href}
										className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
									>
										<link.icon className="w-4 h-4 text-primary/60 group-hover:text-primary transition-colors" />
										{link.label}
									</Link>
								</li>
							))}
						</ul>
					</div>

					<div>
						<h3 className="font-semibold text-sm text-foreground mb-4">
							Learning
						</h3>
						<ul className="space-y-3">
							{footerLinks.learning.map((link) => (
								<li key={link.href}>
									<Link
										href={link.href}
										className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
									>
										<link.icon className="w-4 h-4 text-primary/60 group-hover:text-primary transition-colors" />
										{link.label}
									</Link>
								</li>
							))}
						</ul>
					</div>

					<div>
						<h3 className="font-semibold text-sm text-foreground mb-4">
							Company
						</h3>
						<ul className="space-y-3">
							{footerLinks.company.map((link) => (
								<li key={link.href}>
									<Link
										href={link.href}
										className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
									>
										<link.icon className="w-4 h-4 text-primary/60 group-hover:text-primary transition-colors" />
										{link.label}
									</Link>
								</li>
							))}
						</ul>
					</div>

					<div>
						<h3 className="font-semibold text-sm text-foreground mb-4">
							Support
						</h3>
						<ul className="space-y-3 mb-6">
							{footerLinks.support.map((link) => (
								<li key={link.href}>
									<Link
										href={link.href}
										className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
									>
										<link.icon className="w-4 h-4 text-primary/60 group-hover:text-primary transition-colors" />
										{link.label}
									</Link>
								</li>
							))}
						</ul>

						{/* <h3 className="font-semibold text-sm text-foreground mb-4">
							Legal
						</h3>
						<ul className="space-y-3">
							{footerLinks.legal.map((link) => (
								<li key={link.href}>
									<Link
										href={link.href}
										className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
									>
										<link.icon className="w-4 h-4 text-primary/60 group-hover:text-primary transition-colors" />
										{link.label}
									</Link>
								</li>
							))}
						</ul> */}
					</div>
				</div>

				<div className="border-t border-border/40 pt-8 mb-8">
					<div className="max-w-2xl mx-auto text-center">
						<h3 className="font-semibold text-lg mb-2">
							Stay Updated
						</h3>
						<p className="text-muted-foreground text-sm mb-4">
							Get the latest updates on new features and learning
							resources delivered to your inbox.
						</p>
						<NewsLetter />
					</div>
				</div>

				<div className="border-t border-border/40 pt-6">
					<div className="flex flex-col md:flex-row justify-between items-center gap-4">
						<div className="text-sm text-muted-foreground">
							&copy; {currentYear} Mentivo. All rights reserved.
						</div>

						<div className="flex items-center gap-6 text-sm text-muted-foreground">
							<span>Status: All systems operational</span>
							<Badge variant="outline" className="text-xs">
								v2.0.1
							</Badge>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
