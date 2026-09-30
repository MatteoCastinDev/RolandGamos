const API_URL = "http://localhost:3000/api";

export async function backIsRunning(): Promise<boolean> {
    const response = await fetch(`${API_URL}/health`);
    if (!response.ok) {
        throw new Error(`Erreur serveur : ${response.status}`);
    }
    return response.json();
}