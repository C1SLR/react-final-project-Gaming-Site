import { useContext, useEffect, useState } from "react";
import { GameContext } from "../Context/Context";
import { listOfDlcGames, screenShots, gameDetails } from "../all api/Allapi";
import { useParams } from "react-router-dom";
import GameHero from "./GameHero";
import GameDetails from "./GameDetails";
import Screenshots from "./Screenshots";
function GamePage({}) {
  const { slug } = useParams();
  const { setDlcGamesData } = useContext(GameContext);
  const [details, setDetails] = useState({});
  const [gamePic, setGamePic] = useState([]);
  useEffect(() => {
    const titleCase = (string) => {
      return string
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
    };
    if (slug) {
      listOfDlcGames(slug).then((res) => {
        // console.log(res);
        setDlcGamesData(res);
        screenShots(slug).then((res) => {
          setGamePic(res);
          // console.log(res);
        });
        gameDetails(slug).then((res) => {
          const pcPlatform = res.platforms.find(
            (plat) => plat.platform.id === 4
          );
          // console.log("Game details =>>>>", res);
          setDetails({
            name: res.name,
            released: res.released,
            developers: res.developers.map((dev) => dev.name),
            rating: res.rating,
            platforms: res.platforms.map((arr) => arr.platform.name),
            genre: res.genres.map((gen) => gen.name),
            tags: res.tags.map((tag) => titleCase(tag.name)),
            publisher: res.publishers[0].name,
            img: res.background_image,
            min_spec: pcPlatform?.requirements?.minimum,
            rec_spec: pcPlatform?.requirements?.recommended,
          });
        });
      });
    }
    window.scrollTo(0, 0);
  }, [slug]);
  return (
    <>
      <div className="mx-40">
        <GameHero game={details} />
        <GameDetails game={details} />
        <Screenshots picture={gamePic} />
      </div>
    </>
  );
}
export default GamePage;
