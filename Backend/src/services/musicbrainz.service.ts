import type { Game } from "../types/game.js";

const MUSICBRAINZ_URL = "https://musicbrainz.org/ws/2";

export async function searchArtist(name: string) {
  const params = new URLSearchParams({
    query: `artist:"${name}"`,
    fmt: "json",
    limit: "5",
  });
  const url = `${MUSICBRAINZ_URL}/artist?${params.toString()}`;

  const response = await fetchMusicBrainz(url);

  const data = await response.json();

  return data.artists;
}

export async function checkFeaturing(proposedArtist: string, currentArtist: string) {
  const params = new URLSearchParams({
    query: `artist:${currentArtist} AND artist:${proposedArtist}`,
    fmt: "json",
    limit: "1",
  });
  console.log(`${MUSICBRAINZ_URL}/recording?${params.toString()}`)

  const url = `${MUSICBRAINZ_URL}/recording?${params.toString()}`;

  const response = await fetchMusicBrainz(url);

  const data = await response.json();

  return data;
}

const delay = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

async function fetchMusicBrainz(url: string) {
  for (let attempt = 1; attempt <= 10; attempt++) {
    try {
      const response = await fetch(url, {
        headers: {
          "User-Agent": "RolandGamos/1.0 (castinmatteopro@gmail.com)",
        },
      });

      if (response.ok) {
        return response;
      }

      console.log(
        `MusicBrainz error ${response.status} - tentative ${attempt}/10`,
      );
    } catch (error) {
      console.log(
        `MusicBrainz request failed - tentative ${attempt}/10`,
      );
    }

    if (attempt < 10) {
      await delay(1000);
    }
  }

  throw new Error("MusicBrainz timeout after 10 attempts");
}