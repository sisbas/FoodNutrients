import { FastifyInstance } from "fastify";
import health from "./health";
import search from "./search";
import foods from "./foods";
import profiles from "./profiles";
import nutrients from "./nutrients";

export function registerRoutes(app: FastifyInstance) {
  app.register(health, { prefix: "/api" });
  app.register(search, { prefix: "/api" });
  app.register(foods, { prefix: "/api" });
  app.register(profiles, { prefix: "/api" });
  app.register(nutrients, { prefix: "/api" });
}
