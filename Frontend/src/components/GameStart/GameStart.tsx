import { startGame } from "../../services/game.service";
import { useGameStore } from "../../stores/gameStore";
import type { Game } from "../../types/GameTypes";

function GameStart() {
  const setGame = useGameStore((state) => state.setGame);

  const handleStart = async () => {
    try {
      const newGame: Game = await startGame();
      setGame(newGame);
    } catch (error) {
      console.error("Impossible de démarrer la partie :", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <header className="border-b border-gray-800 px-8 py-5">
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          <div>
            <h1 className="text-xl font-bold tracking-tight">
              ROLAND GAMOS
            </h1>

            <p className="text-sm text-gray-500">
              Le jeu des featurings
            </p>
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span className="h-2 w-2 rounded-full bg-blue-500" />
            Prêt à jouer
          </div>
        </div>
      </header>

      <main className="flex min-h-[calc(100vh-81px)] items-center justify-center px-4">
        <div className="flex w-full max-w-xl flex-col items-center text-center">
          <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-full border border-gray-800 bg-gray-900 shadow-2xl">
            <span className="text-4xl">🎤</span>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-gray-500">
              Bienvenue dans
            </p>

            <h2 className="mt-4 text-5xl font-bold tracking-tight sm:text-6xl">
              ROLAND GAMOS
            </h2>

            <p className="mt-4 text-lg text-gray-500">
              Le jeu des featurings
            </p>
          </div>

          <p className="mt-6 max-w-md text-sm leading-6 text-gray-600">
            À chaque tour, propose un artiste ayant collaboré avec l'artiste
            actuel. Trouve la bonne connexion et fais durer la partie.
          </p>

          <button
            type="button"
            onClick={handleStart}
            className="mt-10 rounded-xl bg-blue-600 px-10 py-3.5 font-medium text-white shadow-lg shadow-blue-600/10 transition hover:bg-blue-500 active:scale-[0.98]"
          >
            Commencer la partie
          </button>

          <p className="mt-4 text-xs text-gray-700">
            Bonne chance 🎵
          </p>
        </div>
      </main>
    </div>
  );
}

export default GameStart;