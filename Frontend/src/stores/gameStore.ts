import { create } from "zustand";

import type { Game } from "../types/GameTypes";

type GameStore = {
  game: Game | null;

  setGame: (game: Game) => void;
  clearGame: () => void;
};

export const useGameStore = create<GameStore>((set) => ({
  game: null,

  setGame: (game) => set({ game }),

  clearGame: () => set({ game: null }),
}));