import "./App.css";
import GamePage from "./views/GamePage";
import {useApiStatus} from "./hooks/useApiStatus.ts";

function App() {
    useApiStatus();

    return (
    <div className="h-screen">
      <GamePage />
    </div>
  );
}

export default App;