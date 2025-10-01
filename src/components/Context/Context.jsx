import { createContext, useState } from "react";

export const GameContext = createContext();

export const GameProvider = ({ children }) => {
    const playHover = () => {
      const hover = new Audio("/hover.mp3");
     hover.play();
    }
  const playClick = () => {
    const click = new Audio("/click.mp3")
    click.play();
  }
  const [gamesData, setGamesData] = useState([]);
  const [bannerPhoto, setBannerPhoto] = useState([]);
  const [gamesdetails, setGamesDetails] = useState([]);
  const [dlcGamesData, setDlcGamesData] = useState([]);
  const [genres, setGenres] = useState([]);
  const [searchGames, setSearchGames] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const Maturity = {
    mature: <img src="/Mature.svg" alt="mature" />,
    "everyone-10-plus": <img src="/E10plus.svg" alt="mature" />,
    teen: <img src="/Teen.svg" alt="teen" />,
    "adults-only": <img src="/AO.svg" alt="adults-only" />,
    everyone: (
      <img
        src="https://www.esrb.org/wp-content/uploads/2019/05/E.svg"
        alt="everyone"
      />
    ),
    "rating-pending": (
      <img
        src="https://www.esrb.org/wp-content/uploads/2019/05/RP.svg"
        alt="rating-pending"
      />
    ),
  };


  return (
    <GameContext.Provider
      value={{
        gamesData,
        setGamesData,
        bannerPhoto,
        setBannerPhoto,
        gamesdetails,
        setGamesDetails,
        dlcGamesData,
        setDlcGamesData,
        Maturity,
        genres,
        setGenres,
        searchGames,
        setSearchGames,
        isOpen,
        setIsOpen,
        playHover,
        playClick
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
