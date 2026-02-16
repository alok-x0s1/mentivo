import HeaderWrapper from "@/components/layout/header-wrapper";
import Footer from "@/components/layout/footer";

export default function HomeRootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<HeaderWrapper />
			{children}
			<Footer />
		</>
	);
}
