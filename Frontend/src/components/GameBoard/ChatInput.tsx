import { useState, type FormEvent } from "react";
import { useChatStore } from "../../stores/chatStore";
import { useGameStore } from "../../stores/gameStore";
import type { Game } from "../../types/GameTypes";

function ChatInput() {
  const [message, setMessage] = useState("");
  const [isChecking, setIsChecking] = useState(false);

  const addMessage = useChatStore((state) => state.addMessage);
  const game = useGameStore();
  const messageStore = useChatStore((state) => state.messages);
  const handleSubmit = async (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!message.trim() || isChecking) return;

    setIsChecking(true);

    try {
      const response = await fetch(
        `http://localhost:3000/api/artists/search?name=${encodeURIComponent(message)}`,
      );

      const data = await response.json();
      if (!data) {
        setMessage("");
        return;
      }
      if(!game || !game.game)
        return;

      const messageCount = messageStore.length;
      if (messageCount == 0) {
        const gameResponse = await fetch(
          `http://localhost:3000/api/games/${game.game.gameId}/firstTurn`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              firstArtist: message,
            }),
          },
        );
        const firstTurnResult = await gameResponse.json()
        game.setGame(firstTurnResult);
        addMessage(firstTurnResult.currentPlayer ?? "player1", message);
      } else {
        const response = await fetch(
          `http://localhost:3000/api/games/${game.game.gameId}/turn`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              artist: message,
            }),
          },
        );
        const turnResult: Game = await response.json();
        game.setGame(turnResult);
        if (turnResult.status === "finished")
          
          console.log("ef");
          
        else {
          addMessage(turnResult.currentPlayer, message);
        }
      }
      setMessage("");
    } finally {
      setIsChecking(false);
    }
  };

  return (
    <div>
      <div>
        <form className="flex w-full gap-2 p-4" onSubmit={handleSubmit}>
          <input
            type="text"
            value={message}
            disabled={isChecking}
            onChange={(event) => setMessage(event.target.value)}
            placeholder="Écrire un message..."
            className="flex-1 rounded-xl border border-gray-300 px-4 py-2 outline-none focus:border-blue-500"
          />

          <button
            type="submit"
            disabled={isChecking}
            className="rounded-xl bg-blue-600 px-5 py-2 text-white hover:bg-blue-700"
          >
            {isChecking ? "Vérification..." : "Envoyer"}
          </button>
        </form>
      </div>
    </div>
    
  );
}

export default ChatInput;
