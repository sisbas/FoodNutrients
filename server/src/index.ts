import Fastify from "fastify";
import cors from "@fastify/cors";
import { registerRoutes } from "./routes";

const app = Fastify({ logger: true });
app.register(cors, { origin: true });
registerRoutes(app);

const port = Number(process.env.PORT || 8080);
app.listen({ port, host: "0.0.0.0" }).then(() => {
  app.log.info(`API listening on :${port}`);
});
