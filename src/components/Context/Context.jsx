import { createContext, useState } from "react";

export const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [gamesData, setGamesData] = useState([]);
  const [bannerPhoto, setBannerPhoto] = useState([]);
  const [gamesdetails, setGamesDetails] = useState([]);
  const [dlcGamesData, setDlcGamesData] = useState([]);
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
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
