import "./App.css";
import { HomeScreen } from "./screen/home";

function App() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="h-full w-full max-w-[500px] flex-col items-center gap-6 border-[2px]">
        <HomeScreen />
      </div>
    </div>

  );
}

export default App;
