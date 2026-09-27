import type { Game } from "../types/game.js";

const games = new Map<string, Game>();

export function createGame(firstArtist: string) {
  const id = crypto.randomUUID();

  const game: Game = {
    currentPlayer: "player1",
    gameId: id,
    currentArtist: null,
    proposedArtist: firstArtist
  };

  games.set(id, game);

  return game;
}

export function getGame(id: string) {
  return games.get(id);
}

export function setGame(game: Game) {
  games.set(game.gameId, game);
}

export function deleteGame(id: string) {
  games.delete(id);
}