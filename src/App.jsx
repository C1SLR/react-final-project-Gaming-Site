import AuthSync from "./components/auth sync/AuthSync";
import { GameProvider } from "./components/Context/Context";
import NavBar from "./components/nav bar/NavBar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="bg-black/95">
      <AuthSync />
      <NavBar />
      <GameProvider>
        <Outlet />
      </GameProvider>
    </div>
  );
}

export default App;
