import { create } from "node:domain";
import { getGame, createGame } from "../managers/game.manager.js";
import type { Game } from "../types/game.js";
import { searchArtist, checkFeaturing } from "./musicbrainz.service.js";

export async function validateArtist(game:Game, newArtist: string){
  const artistExists = await searchArtist(newArtist);

  if (!artistExists) {
    return false;
  }
  game.currentArtist = game.proposedArtist;
  game.proposedArtist = newArtist;

  const hasFeaturing = await checkFeaturing(game);
  
  if (!hasFeaturing || hasFeaturing.count == 0) {
    return false;
  }

  return game;
}

export async function startGame(firstArtist: string){
  const artistExists = await searchArtist(firstArtist);

  if (!artistExists) {
    return false;
  }
  
  const game = createGame(firstArtist);
  
  return game;
}
