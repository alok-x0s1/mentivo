import { Hono } from "hono";
import { authMiddleware } from "./middleware/auth-middleware";
import { aiMatchUsers } from "@/lib/ai";
import {
	findMatchesByUserId,
	getGoalsByUserAndCommunity,
	getGoalsByUsersAndCommunity,
	getPartnerUserId,
	getUserMatches,
	getUsersByIds,
} from "@/lib/db-helpers";
import { db } from "@/db";
import {
	communities,
	conversations,
	learningGoals,
	matches,
	users,
} from "@/db/schema";
import { eq, inArray } from "drizzle-orm";
import { HTTPException } from "hono/http-exception";

type Variables = {
	userId: string;
};

const matchesApp = new Hono<{ Variables: Variables }>()
	.use("/*", authMiddleware)
	.post("/:communityId/aimatch", async (c) => {
		const user = c.get("user");
		const communityId = c.req.param("communityId");

		const aiMatch = await aiMatchUsers(user, communityId);
		return c.json(aiMatch);
	})

export { matchesApp };
