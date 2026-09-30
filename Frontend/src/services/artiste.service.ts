const API_URL = "http://localhost:3000/api";

export async function checkArtistExist(newArtist: string) {
    const response = await fetch(`${API_URL}/artists/search?name=${encodeURIComponent(newArtist)}`);
      if (!response.ok) {
        throw new Error(`Erreur serveur : ${response.status}`);
      }
      return response.json();
}