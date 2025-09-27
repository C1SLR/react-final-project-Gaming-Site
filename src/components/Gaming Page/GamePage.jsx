import { useContext, useEffect } from "react";
import { GameContext } from "../Context/Context";
import { listOfDlcGames } from "../all api/Allapi";

function GamePage() {
  const { gameSlug, setDlcGamesData } = useContext(GameContext);
  useEffect(() => {
    listOfDlcGames().then((res) => {
      console.log(res);
      setDlcGamesData(res);
    });
  }, []);
  return (
    <div className="text-white">
      <p>{gameSlug}</p>
    </div>
  );
}
export default GamePage;
