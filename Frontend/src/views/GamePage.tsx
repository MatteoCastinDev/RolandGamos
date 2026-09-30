import Chat from "../components/GameBoard/Chat";
import GameEnding from "../components/GameEnding/GameEnding";
import GameStart from "../components/GameStart/GameStart";
import { useGameStore } from "../stores/gameStore";

function GamePage() {
  const status = useGameStore((state) => state.game?.status);
    if (!status) {
    return <GameStart />;
  }

  if (status == "playing") {
    return <Chat/>
  }

  if (status == "finished") {
    return <GameEnding/>
  }

  return null;
}

export default GamePage;
