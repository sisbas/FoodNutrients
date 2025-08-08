import { FastifyInstance } from "fastify";
import { PROFILES } from "@shared";

export default async function (app: FastifyInstance) {
  app.get("/profiles", async () => {
    return { items: PROFILES };
  });
}
