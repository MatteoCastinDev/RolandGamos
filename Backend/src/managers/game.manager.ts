import type { Game } from "../types/game.js";

const games = new Map<string, Game>();

export function createGame() {
  const id = crypto.randomUUID();

  const game: Game = {
    currentPlayer: "player1",
    gameId: id,
    currentArtist: null,
    artistList: [],
    loosingReason: "not defined",
    winner: null,
    status: "playing"
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