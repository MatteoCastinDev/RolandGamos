import { useState, type FormEvent } from "react";
import { useChatStore } from "../../stores/chatStore";


function ChatInput() {
    const [message, setMessage] = useState("");

    const addMessage = useChatStore((state) => state.addMessage);

    const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!message.trim()) return;

        addMessage(Math.random() < 0.5 ? false : true, message);

        setMessage("");
    }

    return (
    <div>
        <div>
        <form className="flex w-full gap-2 p-4" onSubmit={handleSubmit}>
      <input
        type="text"
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        placeholder="Écrire un message..."
        className="flex-1 rounded-xl border border-gray-300 px-4 py-2 outline-none focus:border-blue-500"
      />

      <button
        
        className="rounded-xl bg-blue-600 px-5 py-2 text-white hover:bg-blue-700"
      >
        Envoyer
      </button>
      </form>
    </div>
    </div>
  );
}

export default ChatInput;