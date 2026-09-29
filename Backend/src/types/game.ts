export type Player = "player1" | "player2";

export type GameStatus = "playing" | "finished";

export type Game = {
  gameId: string;

  currentArtist: string | null;
  currentPlayer: Player;
  artistList: string[];

  status: GameStatus;
  winner: Player | null;
  loosingReason: string;
};