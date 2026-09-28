export interface ChatMessage {
  id: string;
  message: string;
  //True if it's player one false if it's player 2 
  player: string;  
}