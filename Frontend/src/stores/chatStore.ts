import { create } from "zustand";
import type { ChatMessage } from "../types/ChatTypes"

type ChatStore = {
    messages: ChatMessage[];
    addMessage: (player: string, message: string) => void;
    clearChat:() => void;
}

export const useChatStore = create<ChatStore>((set) => ({
    messages: [],

    addMessage: (player, message) =>
        set((state) => ({
            messages: [
                ...state.messages,
                {
                    id: crypto.randomUUID(),
                    player,
                    message
                },
            ],
        })),
    clearChat: () => set({messages: []})
}));