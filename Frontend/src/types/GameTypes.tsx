export type Player = "player1" | "player2";

export type GameStatus = "playing" | "finished";

export type Game = {
  gameId: string;

  currentArtist: string;
  currentPlayer: Player;

  status: GameStatus;
  winner: Player | null;  
  loosingReason: string;
};