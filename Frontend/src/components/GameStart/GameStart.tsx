import { startGame } from "../../services/game.service";
import { useGameStore } from "../../stores/gameStore";
import type { Game } from "../../types/GameTypes";
import logo from "../../assets/logo.png";
import tinyLogo from "../../assets/logo_page.png";
import {useHealthStore} from "../../stores/healthStore.ts";

function GameStart() {
  const setGame = useGameStore((state) => state.setGame);
  const isOnline = useHealthStore((state) => state.isOnline);

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
            <div className="flex items-center gap-3">
              <img
                  src={tinyLogo}
                  alt="Roland Gamos"
                  className="h-10 w-10 object-contain"
              />

              <div>
                <h1 className="text-xl font-bold tracking-tight">
                  ROLAND GAMOS
                </h1>

                <p className="text-sm text-gray-500">
                  Le jeu des featurings
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-500">
              <span className="h-2 w-2 rounded-full bg-blue-500" />
              Prêt à jouer
            </div>
          </div>
        </header>

        <main className="flex min-h-[calc(100vh-81px)] items-center justify-center px-4">
          <div className="flex w-full max-w-xl flex-col items-center text-center">
            {/* Logo principal */}
            <div className="mb-8 flex justify-center">
              <img
                  src={logo}
                  alt="Roland Gamos"
                  className="w-80 max-w-full object-contain drop-shadow-[0_0_35px_rgba(37,99,235,0.2)]"
              />
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

            {isOnline ? <button
                type="button"
                onClick={handleStart}
                className="mt-10 rounded-xl bg-blue-600 px-10 py-3.5 font-medium text-white shadow-lg shadow-blue-600/10 transition hover:bg-blue-500 active:scale-[0.98]"
            >
              Commencer la partie
            </button> :
                <button
                    type="button"
                    onClick={handleStart}
                    className="mt-10 rounded-xl bg-blue-600 px-10 py-3.5 font-medium text-white shadow-lg shadow-blue-600/10 transition hover:bg-blue-500 active:scale-[0.98]"
                >
                  Serveur Indisponible
                </button>
            }

            <p className="mt-4 text-xs text-gray-700">
              Bonne chance 🎵
            </p>
          </div>
        </main>
      </div>
  );
}

export default GameStart;