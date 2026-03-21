import { db } from "@/db";
import { newsletterSubscribers } from "@/db/schema";
import { eq } from "drizzle-orm";
import { Hono } from "hono";
import { HTTPException } from "hono/http-exception";

const newsletterApp = new Hono().post("/subscribe", async (c) => {
	const { email } = await c.req.json();

	if (!email) {
		throw new HTTPException(400, {
			message: "Email is required to subscribe",
		});
	}

	const [existing] = await db
		.select()
		.from(newsletterSubscribers)
		.where(eq(newsletterSubscribers.email, email));

	if (existing) {
		throw new HTTPException(409, {
			message: "Already subscribed to newsletter",
		});
	}

	const [subscriber] = await db
		.insert(newsletterSubscribers)
		.values({
			email,
		})
		.returning();

	return c.json({
		success: true,
		message: "Subscribed successfully to newsletter",
		subscriber,
	});
});

export { newsletterApp };
