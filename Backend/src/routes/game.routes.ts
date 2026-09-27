import type { FastifyInstance } from "fastify";
import { startGame, validateArtist } from "../services/game.service.js";
import { getGame } from "../managers/game.manager.js";

export async function gameRoutes(app: FastifyInstance) {
  app.get("/api/game/start", async (request, reply) => {
    const { firstArtist } = request.query as { firstArtist: string };

    if (!firstArtist) {
      return reply.status(400).send({
        error: "Artist name is required",
      });
    }
    const game = startGame(firstArtist);
    return game;
    
  }),
app.get("/api/game/play", async (request, reply) => {
    const { gameId } = request.query as { gameId: string };
    const { newArtist } = request.query as { newArtist: string };

    if (!newArtist || !gameId) {
      return reply.status(400).send({
        error: "Artist and Game Identifiant is required",
      });
    }
    const game = getGame(gameId)
    if(!game)
        return false;
    const gameStatut = await validateArtist(game, newArtist);
    if(!gameStatut)
        return false;    
    return game;
    
  }
)};