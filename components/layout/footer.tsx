"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import {
	GithubIcon,
	TwitterIcon,
	LinkedinIcon,
	MailIcon,
	MessageCircleIcon,
	TrophyIcon,
	UsersIcon,
	BookOpenIcon,
	GraduationCapIcon,
	LightbulbIcon,
	ShieldIcon,
	HelpCircleIcon,
	FileTextIcon,
	HeartIcon,
} from "lucide-react";

const footerLinks = {
	product: [
		{ href: "#features", label: "Features", icon: LightbulbIcon },
		{ href: "#pricing", label: "Pricing", icon: TrophyIcon },
		{ href: "/communities", label: "Communities", icon: UsersIcon },
		{ href: "/chat", label: "AI Chat", icon: MessageCircleIcon },
	],
	learning: [
		{ href: "/courses", label: "Courses", icon: BookOpenIcon },
		{ href: "/tutorials", label: "Tutorials", icon: GraduationCapIcon },
		{ href: "/resources", label: "Resources", icon: FileTextIcon },
		{ href: "/certificates", label: "Certificates", icon: TrophyIcon },
	],
	company: [
		{ href: "/about", label: "About Us", icon: UsersIcon },
		{ href: "/careers", label: "Careers", icon: GraduationCapIcon },
		{ href: "/blog", label: "Blog", icon: FileTextIcon },
		{ href: "/press", label: "Press", icon: MessageCircleIcon },
	],
	support: [
		{ href: "/help", label: "Help Center", icon: HelpCircleIcon },
		{ href: "/contact", label: "Contact Us", icon: MailIcon },
		{ href: "/faq", label: "FAQ", icon: MessageCircleIcon },
		{ href: "/feedback", label: "Feedback", icon: LightbulbIcon },
	],
	legal: [
		{ href: "/privacy", label: "Privacy Policy", icon: ShieldIcon },
		{ href: "/terms", label: "Terms of Service", icon: FileTextIcon },
		{ href: "/cookies", label: "Cookie Policy", icon: ShieldIcon },
		{ href: "/gdpr", label: "GDPR", icon: ShieldIcon },
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
								Your AI-powered learning companion. Connect,
								collaborate, and grow with personalized learning
								experiences powered by artificial intelligence.
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
							<HeartIcon className="w-3 h-3 text-primary" />
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
						<form className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
							<input
								type="email"
								placeholder="Enter your email"
								className="flex-1 h-8 px-3 py-2 text-sm border border-input bg-background rounded-md focus:outline-none focus:ring-1 focus:ring-ring"
								required
							/>
							<Button
								type="submit"
								size="sm"
								className="px-6 py-4"
							>
								Subscribe
							</Button>
						</form>
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
