"use client";

import { useState } from "react";
import { toast } from "sonner";

import { client } from "@/lib/api-client";
import { Button } from "../ui/button";

const NewsLetter = () => {
	const [email, setEmail] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	const handleSubscribe = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (!email.trim()) {
			toast.error("Email is required to subscribe");
			return;
		}

		try {
			setIsLoading(true);

			const response = await client.api.newsletter.subscribe.$post({
				json: {
					email,
				},
			});

			const data = await response.json();

			if (!response.ok) {
				throw new Error(
					data.message || "Failed to subscribe to newsletter",
				);
			}

			toast.success(data.message);
			setEmail("");
		} catch (error) {
			toast.error(
				error instanceof Error ? error.message : "Something went wrong",
			);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<form
			onSubmit={handleSubscribe}
			className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto"
		>
			<input
				type="email"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
				placeholder="Enter your email"
				className="flex-1 h-8 px-3 py-2 text-sm border border-input bg-background rounded-md focus:outline-none focus:ring-1 focus:ring-ring"
			/>

			<Button
				type="submit"
				size="sm"
				className="px-6 py-4"
				disabled={isLoading}
			>
				{isLoading ? "Subscribing..." : "Subscribe"}
			</Button>
		</form>
	);
};

export default NewsLetter;
