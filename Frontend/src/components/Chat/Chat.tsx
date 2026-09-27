import { useEffect, useRef } from "react";
import { useChatStore } from "../../stores/chatStore";
import BubbleChat from "./BubbleChat";
import ChatInput from "./ChatInput";

function Chat() {
  const messages = useChatStore((state) => state.messages);

  const messageContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messageContainerRef.current) {
      messageContainerRef.current.scrollTop = 
      messageContainerRef.current.scrollHeight;
      console.log("fdfs")
    }
  }, [messages]);

  return (
    <div className="w-[70%] h-full flex flex-col">
      <div 
      ref={messageContainerRef}
      className="flex-1 min-h-0 border-5 rounded-md border-black p-4 overflow-y-auto">
        <ul className="space-y-5">
          {messages.map((message) => (
            <BubbleChat player={message.player} message={message.message} />
          ))}
        </ul>
      </div>
      <div >
        <ChatInput/>
      </div>
    </div>
  );
}

export default Chat;
