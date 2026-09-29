import { getGame, createGame } from "../managers/game.manager.js";
import { searchArtist, checkFeaturing } from "./musicbrainz.service.js";

export async function playTurn(gameId: string, proposedArtist: string) {
  const artistExists = await searchArtist(proposedArtist);

  if (!artistExists) return false;
 
  const game = getGame(gameId);
  if (!game || !game.currentArtist) return false;

  const hasFeaturing = await checkFeaturing(proposedArtist, game.currentArtist);

  if (!hasFeaturing || hasFeaturing.count == 0) {
    game.status = "finished";
    game.winner = game.currentPlayer;
  } else {
    game.currentArtist = proposedArtist;
    game.currentPlayer = game.currentPlayer === "player1" ? "player2" : "player1";
  }
  return game;
}

export async function startGame() {
  
  const game = createGame();

  return game;
}

export async function firstTurn(gameId: string, proposedArtist: string) {

  const artistExists = await searchArtist(proposedArtist);

  if (!artistExists) return false;
 
  const game = getGame(gameId);
  if (!game) return false;
  game.currentArtist = proposedArtist
  game.currentPlayer = game.currentPlayer === "player1" ? "player2" : "player1";
  return game;
}
