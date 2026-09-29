import Chat from "../components/GameBoard/Chat";
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
    return <div><h2>PuffGoutPaff</h2></div>
  }

  return null;
}

export default GamePage;
