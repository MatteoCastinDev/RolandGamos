import { startGame } from "../../services/game.service";
import { useChatStore } from "../../stores/chatStore";
import { useGameStore } from "../../stores/gameStore";
import type { Game } from "../../types/GameTypes";

function GameEnding() {
  const game = useGameStore((state) => state.game);
  const setGame = useGameStore((state) => state.setGame);
  const clearChat = useChatStore((state) => state.clearChat);
  if (!game) {
    return null;
  }

  const winner =
    game.winner === "player1"
      ? "Joueur 1"
      : game.winner === "player2"
        ? "Joueur 2"
        : "Personne";

  const handleRestart = async () => {
    try {
      clearChat();

      const newGame: Game = await startGame();

      setGame(newGame);
    } catch (error) {
      console.error("Impossible de démarrer la partie :", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Header */}
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
            <span className="h-2 w-2 rounded-full bg-gray-600" />
            Partie terminée
          </div>
        </div>
      </header>

      {/* Result */}
      <main className="flex min-h-[calc(100vh-81px)] items-center justify-center px-4">
        <div className="flex w-full max-w-xl flex-col items-center text-center">

          {/* Trophy */}
          <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-full border border-gray-800 bg-gray-900 shadow-2xl">
            <span className="text-5xl">🏆</span>
          </div>

          {/* Text */}
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-gray-500">
              Partie terminée
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              {winner} a gagné
            </h2>

            {/* Defeat reason */}
            <div className="mt-6 rounded-xl border border-red-900/50 bg-red-950/30 px-5 py-3">
              <p className="text-sm text-red-400">
                ❌ {game.loosingReason}
              </p>
            </div>

            <p className="mx-auto mt-4 max-w-md text-gray-500">
              La partie est terminée. Prêt à tenter une nouvelle série de
              featurings ?
            </p>
          </div>

          {/* Restart */}
          <button
            type="button"
            onClick={handleRestart}
            className="mt-10 rounded-xl bg-blue-600 px-8 py-3.5 font-medium text-white shadow-lg shadow-blue-600/10 transition hover:bg-blue-500 active:scale-[0.98]"
          >
            Rejouer
          </button>
        </div>
      </main>
    </div>
  );
}

export default GameEnding;