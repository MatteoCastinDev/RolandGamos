import { useEffect, useRef } from "react";
import { useChatStore } from "../../stores/chatStore";
import { useGameStore } from "../../stores/gameStore";
import BubbleChat from "./BubbleChat";
import ChatInput from "./ChatInput";

function Chat() {
  const messages = useChatStore((state) => state.messages);
  const game = useGameStore((state) => state.game);

  const messageContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messageContainerRef.current) {
      messageContainerRef.current.scrollTop =
        messageContainerRef.current.scrollHeight;
    }
  }, [messages]);

  if (!game) return null;

  return (
    <div className="h-screen overflow-hidden bg-gray-950 text-white flex flex-col">
      {/* Header */}
      <header className="shrink-0 border-b border-gray-800 px-8 py-5">
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          <div>
            <h1 className="text-xl font-bold tracking-tight">
              ROLAND GAMOS
            </h1>
            <p className="text-sm text-gray-500">
              Le jeu des featurings
            </p>
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-400">
            <span className="h-2 w-2 rounded-full bg-green-500" />
            Partie en cours
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="min-h-0 flex-1 px-4 py-8">
        <div className="mx-auto flex h-full max-w-3xl min-h-0 flex-col">

          {/* Artist */}
          <div className="shrink-0 mb-6 text-center">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-gray-500">
              Artiste actuel
            </p>

            <h2 className="mt-2 text-4xl font-bold tracking-tight">
              {game.currentArtist}
            </h2>

            <div className="mt-3 inline-flex items-center rounded-full border border-gray-800 bg-gray-900 px-4 py-2 text-sm text-gray-300">
              Tour du{" "}
              <span className="ml-1 font-semibold text-white">
                {game.currentPlayer === "player1"
                  ? "Joueur 1"
                  : "Joueur 2"}
              </span>
            </div>
          </div>

         <div className="min-h-0 flex flex-1 flex-col overflow-hidden rounded-2xl border border-gray-800 bg-gray-900 shadow-2xl">

  {/* Zone des messages */}
  <div
    ref={messageContainerRef}
    className="min-h-0 flex-1 overflow-y-auto p-6"
  >
    <ul className="space-y-4">
      {messages.map((message) => (
        <BubbleChat
          key={message.id}
          player={message.player}
          message={message.message}
        />
      ))}
    </ul>
  </div>

  {/* Input fixe */}
  <div className="shrink-0 border-t border-gray-800">
    <ChatInput />
  </div>

</div>
        </div>
      </main>
    </div>
  );
}

export default Chat;