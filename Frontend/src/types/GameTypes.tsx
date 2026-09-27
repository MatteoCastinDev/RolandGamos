export type Game = {
  gameId: string;
  currentArtist: string | null;
  proposedArtist: string;
  currentPlayer: "player1" | "player2"
};
