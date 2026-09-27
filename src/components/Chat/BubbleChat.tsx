import type { ChatMessage } from "../../types/ChatTypes";


function BubbleChat({ player, message }: ChatMessage) {
  return (
    <div>
      {player ? (
        <div>
          {/* Chat */}
          <li className="max-w-lg flex gap-x-2 sm:gap-x-4 me-11">
            <div>
              {/* Card */}
              <div className="bg-white dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 rounded-2xl p-4 space-y-3">
                <h2 className="font-medium text-gray-800 dark:text-neutral-200">
                  ${message}
                </h2>
              </div>
              {/* End Card */}
            </div>
          </li>
          {/* End Chat */}
        </div>
      ) : (
        <div>
          {/* Chat */}
          <li className="ms-auto flex gap-x-2 sm:gap-x-4">
            <div className="grow text-end space-y-3">
              <div className="inline-flex flex-col justify-end">
                {/* Card */}
                <div className="inline-block bg-blue-600 dark:bg-blue-500 rounded-2xl p-4 shadow-2xs">
                  <p className="text-sm text-white">what's preline ui?</p>
                </div>
                {/* End Card */}
              </div>
            </div>
          </li>
          {/* End Chat */}
        </div>
      )}
    </div>
  );
}

export default BubbleChat;
