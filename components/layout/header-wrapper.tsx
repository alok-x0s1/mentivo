import { auth } from "@clerk/nextjs/server";
import Header from "./header";

export default async function HeaderWrapper() {
	const { has } = await auth();
	const isPro = has({ plan: "creator" });

	return <Header isPro={isPro} />;
}
