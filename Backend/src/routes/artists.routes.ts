import type { FastifyInstance } from "fastify";
import { checkFeaturing, searchArtist } from "../services/musicbrainz.service.js"

export async function artistsRoutes(app: FastifyInstance) {
  app.get("/api/artists/search", async (request, reply) => {
    const { name } = request.query as { name: string };

    if (!name) {
      return reply.status(400).send({
        error: "Artist name is required",
      });
    }

    const artists = await searchArtist(name);
    if(artists.length == 0)
      return false;

    return true;
  });

  app.get("/api/artists/checkFeat", async (request, reply) => {
    const { nameA } = request.query as { nameA: string };
    const { nameB } = request.query as { nameB: string };
    
    if (!nameA || !nameB) {
      return reply.status(400).send({
        error: `Artists names is required ${nameA}${nameB} `,
      });
    }

    const artists = await checkFeaturing(nameA, nameB);

    return {
      artists,
    };
  });
}