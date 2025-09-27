import { useContext, useEffect, useState } from "react";
import { GameContext } from "../Context/Context";
import { listOfDlcGames, screenShots } from "../all api/Allapi";
import { useParams } from "react-router-dom";
function GamePage({}) {
  const { slug } = useParams();
  const { setDlcGamesData } = useContext(GameContext);
  useEffect(() => {
    if (slug) {
      listOfDlcGames(slug).then((res) => {
        // console.log(res);
        setDlcGamesData(res);
        screenShots(slug).then((res) => {
          console.log(res);
        });
      });
    }
  }, [slug]);
  return (
    <div className="text-white">
      <p>{slug}</p>
    </div>
  );
}
export default GamePage;
