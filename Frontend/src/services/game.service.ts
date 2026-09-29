import type { Game } from "../types/GameTypes";

const API_URL = "http://localhost:3000/api";

export async function startGame(): Promise<Game> {
  const response = await fetch(`${API_URL}/games/start`);
  if (!response.ok) {
    throw new Error(`Erreur serveur : ${response.status}`);
  }
  return response.json();
}

export async function submitFirstArtist(
  gameId: string,
  artist: string,
): Promise<Game> {
  const response = await fetch(
    `${API_URL}/games/${gameId}/firstTurn`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstArtist: artist,
      }),
    },
  );

  if (!response.ok) {
    throw new Error(`Erreur serveur : ${response.status}`);
  }

  return response.json();
}

export async function submitArtist(
  gameId: string,
  artist: string,
): Promise<Game> {
  const response = await fetch(
    `${API_URL}/games/${gameId}/turn`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        artist: artist,
      }),
    },
  );
  if (!response.ok) {
    throw new Error(`Erreur serveur : ${response.status}`);
  }

  return response.json();
}
