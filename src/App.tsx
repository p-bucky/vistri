import { Routes, Route } from "react-router-dom";
import "./App.css";
import { DetailsScreen } from "./screen/details";
import { HomeScreen } from "./screen/home";

function App() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-primary/5">
      <div className="h-full w-full flex-col items-center gap-6">
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/details" element={<DetailsScreen />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
