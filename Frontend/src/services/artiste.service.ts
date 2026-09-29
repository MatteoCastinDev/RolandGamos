const API_URL = "http://localhost:3000";

export async function checkArtistExist(newArtist: string) {
    const response = await fetch(`http://localhost:3000/api/artists/search?name=${encodeURIComponent(newArtist)}`);
      if (!response.ok) {
        throw new Error(`Erreur serveur : ${response.status}`);
      }
      return response.json();
}