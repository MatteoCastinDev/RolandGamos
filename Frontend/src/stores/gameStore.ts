import { create } from "zustand";

type GameStore = {
  gameId: string | null;
  currentArtist: string | null;
  currentPlayer: "player1" | "player2" | null;

  setGame: (
    gameId: string,
    currentArtist: string | null,
    currentPlayer: "player1" | "player2"
  ) => void;

  clearGame: () => void;
};

export const useGameStore = create<GameStore>((set) => ({
  gameId: null,
  currentArtist: null,
  currentPlayer: null,

  setGame: (gameId, currentArtist, currentPlayer) =>
    set({
      gameId,
      currentArtist,
      currentPlayer,
    }),

  clearGame: () =>
    set({
      gameId: null,
      currentArtist: null,
      currentPlayer: null,
    }),
}));