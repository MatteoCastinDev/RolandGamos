import { startGame } from "../../services/game.service";
import { useChatStore } from "../../stores/chatStore";
import { useGameStore } from "../../stores/gameStore";
import type { Game } from "../../types/GameTypes";


function GameEnding() {
  const game = useGameStore((state) => state.game);
  const clearChat = useChatStore((state) => state.clearChat);
  const gameStore = useGameStore();

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
      console.log(useChatStore.getState().messages);
      const newGame: Game = await startGame();
      gameStore.setGame(newGame);
    } catch (error) {
      console.error("Impossible de démarrer la partie :", error);
    }
  };

  return (
    <div className="h-full flex items-center justify-center">
      <div className="flex flex-col items-center gap-8 text-center">
        <div>
          <p className="text-lg text-gray-500">Partie terminée</p>

          <h1 className="mt-2 text-5xl font-bold">🏆 {winner} a gagné !</h1>
        </div>

        <button
          type="button"
          onClick={handleRestart}
          className="rounded-xl bg-blue-600 px-8 py-3 font-medium text-white hover:bg-blue-700"
        >
          Rejouer
        </button>
      </div>
    </div>
  );
}

export default GameEnding;
