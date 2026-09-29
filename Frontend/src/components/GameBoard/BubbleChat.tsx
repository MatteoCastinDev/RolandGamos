type BubbleChatProps = {
  player: string;
  message: string;
};

function BubbleChat({ player, message }: BubbleChatProps) {
  const isPlayer2 = player === "player2";

  return (
    <li className={isPlayer2 ? "flex" : "flex justify-end"}>
      <div
        className={
          isPlayer2
            ? "max-w-[70%] rounded-2xl rounded-tl-sm bg-gray-800 px-4 py-3"
            : "max-w-[70%] rounded-2xl rounded-tr-sm bg-blue-600 px-4 py-3"
        }
      >
        <p className="text-sm text-white">
          {message}
        </p>
      </div>
    </li>
  );
}

export default BubbleChat;