import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const josefinSans = Poppins({
	variable: "--font-josefin-sans",
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
				<body className={`${josefinSans.className} antialiased`}>
					{children}
				</body>
			</html>
		</ClerkProvider>
	);
}
