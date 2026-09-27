import type { ChatMessage } from "../../types/ChatTypes";
import BubbleChat from "./BubbleChat";

function Chat(messages : ChatMessage[]) {
  return (
    <div className="w-[75%]">
      <div className="border-5 rounded-md border-black p-4">
        <ul className="space-y-5">
          {
            messages.map((message : ChatMessage) => (
              <BubbleChat player=message={.} message={message}/>
            ))
          }
        </ul>
      </div>
      <div className="flex w-full gap-2 border-t p-4">
      <input
        type="text"
        placeholder="Écrire un message..."
        className="flex-1 rounded-xl border border-gray-300 px-4 py-2 outline-none focus:border-blue-500"
      />

      <button
        className="rounded-xl bg-blue-600 px-5 py-2 text-white hover:bg-blue-700"
      >
        Envoyer
      </button>
    </div>
    </div>
  );
}

export default Chat;