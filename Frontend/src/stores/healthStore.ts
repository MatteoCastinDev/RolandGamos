import { create } from "zustand";

type ApiStore = {
    isOnline: boolean;
    setOnline: (isOnline: boolean) => void;
};

export const useHealthStore = create<ApiStore>((set) => ({
    isOnline: false,
    setOnline: (isOnline) => set({ isOnline }),
}));