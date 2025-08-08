import { FastifyInstance } from "fastify";
import { NUTRIENTS_TR } from "@shared";

export default async function (app: FastifyInstance) {
  app.get("/nutrients", async () => {
    return { items: NUTRIENTS_TR };
  });
}
