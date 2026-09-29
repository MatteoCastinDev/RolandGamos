import type { FastifyInstance } from "fastify";
import { playTurn, startGame, firstTurn } from "../services/game.service.js";
import { getGame } from "../managers/game.manager.js";

export async function gameRoutes(app: FastifyInstance) {
  (app.post("/api/games/:gameId/firstTurn", async (request, reply) => {
      const { gameId } = request.params as { gameId: string };
      const { firstArtist } = request.body as { firstArtist: string };

    if (!firstArtist) {
      return reply.status(400).send({
        error: "Artist name is required",
      });
    }
    const game = firstTurn(gameId, firstArtist);
    return game;
  }),

  
    app.get("/api/games/start", async (request, reply) => {
      const game = startGame();
      return game;
    }),


    app.post("/api/games/:gameId/turn", async (request, reply) => {
      const { gameId } = request.params as { gameId: string };
      const { artist } = request.body as { artist: string };

      if (!artist || !gameId) {
        return reply.status(400).send({
          error: "Artist and Game Identifiant is required",
        });
      }

      const result = await playTurn(gameId, artist);
      return result;
    }));
}
