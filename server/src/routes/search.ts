import { FastifyInstance } from "fastify";
import { searchFoods } from "../services/fdc";

export default async function (app: FastifyInstance) {
  app.get("/search", async (req, reply) => {
    const { q = "", category = "", lang = "tr", limit = 20 } = (req.query as any) || {};
    const results = await searchFoods(String(q), String(category), String(lang), Number(limit));
    return { items: results };
  });
}
