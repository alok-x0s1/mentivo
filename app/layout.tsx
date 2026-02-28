import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { QueryProvider } from "@/components/providers/query-provider";
import { Toaster } from "@/components/ui/sonner";

const outfit = Outfit({
	variable: "--font-outfit",
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
	title: "Mentivo - AI Learner matching platform",
	description:
		"Mentivo is an AI Learner matching platform to connect with other learners to learn together and grow together.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<ClerkProvider>
			<html lang="en">
				<body className={`${outfit.className} antialiased`}>
					<QueryProvider>
						{children}
						<Toaster
							position="top-right"
							toastOptions={{
								style: {
									fontFamily: outfit.style.fontFamily,
									fontWeight: "400",
									letterSpacing: "0.25px",
									fontSize: "14px",
								},
							}}
						/>
					</QueryProvider>
				</body>
			</html>
		</ClerkProvider>
	);
}
