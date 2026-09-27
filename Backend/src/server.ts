import Fastify from "fastify";
import cors from "@fastify/cors";
import { artistsRoutes } from "./routes/artists.routes.js";
import { gameRoutes } from "./routes/game.routes.js";

const app = Fastify({
  logger: true,
});

await app.register(cors, {
    origin: "http://localhost:5173"
})

app.get("/", async () => {
  return {
    message: "Hello World!",
  };
});

await app.register(artistsRoutes, gameRoutes);

app.listen({ port: 3000 }, (error, address) => {
  if (error) {
    app.log.error(error);
    process.exit(1);
  }

  console.log(`Server running at ${address}`);
});