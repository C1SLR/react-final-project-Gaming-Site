import { useAuthSync } from "./components/redux/useAuthSync";
import { GameProvider } from "./components/Context/Context";
import NavBar from "./components/nav bar/NavBar";
import { Outlet } from "react-router-dom";

function App() {
  useAuthSync();
  return (
    <div className="bg-black/92">
      <NavBar />
      <GameProvider>
        <Outlet />
      </GameProvider>
    </div>
  );
}

export default App;
