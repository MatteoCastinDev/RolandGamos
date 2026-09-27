import './App.css'
import Chat from './components/Chat/Chat'
import type { ChatMessage } from './types/ChatTypes';

const messages: ChatMessage[] = [
  {
    message: "Salut !",
    player: true,
  },
  {
    message: "Bonjour !",
    player: false,
  },
  {
    message: "Comment ça va ?",
    player: true,
  },
];

function App() {
  
  return (
    <div className='h-screen flex justify-center'>
      <Chat/>
    </div>
  )
}

export default App
