import { getGame, createGame } from "../managers/game.manager.js";
import { searchArtist, checkFeaturing } from "./musicbrainz.service.js";

export async function playTurn(gameId: string, proposedArtist: string) {
  const game = getGame(gameId);
  const artistExists = await searchArtist(proposedArtist);
  if (!game || !game.currentArtist || !artistExists) return false;
  game.currentPlayer = game.currentPlayer === "player1" ? "player2" : "player1";
  if (game.artistList.includes(proposedArtist)) {
    game.loosingReason = `${proposedArtist} à déjà été cité !`;
  } else {
    const hasFeaturing = await checkFeaturing(
      proposedArtist,
      game.currentArtist,
    );
    if (hasFeaturing && hasFeaturing.count != 0) {
      game.artistList.push(proposedArtist);
      game.currentArtist = proposedArtist;
      return game;
    }
  }
  if(game.loosingReason === "not defined")
    game.loosingReason = `Aucun featuring entre ${proposedArtist} et ${game.artistList.at(-1)} !`
  game.status = "finished";
  game.winner = game.currentPlayer;
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
  game.artistList.push(proposedArtist);
  game.currentArtist = proposedArtist;
  game.currentPlayer = game.currentPlayer === "player1" ? "player2" : "player1";
  return game;
}
