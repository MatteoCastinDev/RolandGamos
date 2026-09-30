import { useEffect } from "react";
import { backIsRunning } from "../services/health.service";
import { useHealthStore } from "../stores/healthStore.ts";
import {useGameStore} from "../stores/gameStore.ts";

export function useApiStatus() {
    const setOnline = useHealthStore((state) => state.setOnline);
    const clearGame = useGameStore((state) => state.clearGame);
    useEffect(() => {
        const check = async () => {
            try {
                const isOnline = await backIsRunning();
                setOnline(isOnline);
            } catch (e) {
                setOnline(false);
                clearGame();
            }
        };

        // Vérification immédiate au lancement
        check();

        // Puis toutes les 30 secondes
        const interval = setInterval(check, 10_000);

        // Nettoyage lorsque App est démonté
        return () => {
            clearInterval(interval);
        };
    }, [setOnline]);
}