import { useGameStore } from "../../stores/gameStore";
import type { Game } from "../../types/GameTypes";

function GameStart() {
  const gameStore = useGameStore();

  const handleStart = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/games/start`);
      if (!response.ok) {
        throw new Error(`Erreur serveur : ${response.status}`);
      }
      const newGame: Game = await response.json();
      gameStore.setGame(newGame);
    } catch (error) {
      console.error("Impossible de démarrer la partie :", error);
    }
  };

  return (
    <div className="h-full flex items-center justify-center">
      <div className="flex flex-col items-center gap-8">
        <div className="text-center">
          <h1 className="text-5xl font-bold">ROLAND GAMOS</h1>

          <p className="mt-3 text-gray-500">Le jeu des featurings</p>
        </div>

        <button
          type="button"
          onClick={handleStart}
          className="rounded-xl bg-blue-600 px-8 py-3 font-medium text-white hover:bg-blue-700"
        >
          Commencer
        </button>
      </div>
    </div>
  );
}

export default GameStart;
