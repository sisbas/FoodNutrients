import { FastifyInstance } from "fastify";
import { getFoodDetail } from "../services/fdc";

export default async function (app: FastifyInstance) {
  app.get("/foods/:fdcId", async (req, reply) => {
    const { fdcId } = req.params as any;
    const { measure = "100g", grams, profile = "general_ri" } = (req.query as any) || {};
    const data = await getFoodDetail(String(fdcId), String(measure), grams ? Number(grams) : undefined, String(profile));
    return data;
  });
}
