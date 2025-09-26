import { useEffect, useState } from "react";
import axios from "axios";
import GamingCard from "./components/gaming card/GamingCard";
import GamingAPI from "./components/gaming api/GamingAPI";
import Allapi from "./components/all api/Allapi";
import NavBar from "./components/nav bar/NavBar";
import { Outlet } from "react-router-dom";

function App() {
  const [gameData, setGameData] = useState([]);

  useEffect(() => {
    const data = async () => {
      try {
        const list = await Allapi.listURL;
        const games = list.data.results.map((game) => ({
          id: game.id,
          title: game.name,

          released: game.released.split("-")[0],
          bg: game.background_image,
          img: game.genres[0].image_background,
        }));
        setGameData(games);
      } catch (error) {
        console.log(error);
      }
    };
    data();
  }, []);

  return (
    <div className="bg-black/95">
      <NavBar />
      <Outlet />
      <div className="flex flex-wrap justify-evenly gap-3 p-10">
        {gameData.map((game) => (
          <div
            key={game.id}
            className="border hover:scale-105 hover:transition"
          >
            <GamingCard game={game} />
          </div>
        ))}
        <GamingAPI />
      </div>
    </div>
  );
}

export default App;
