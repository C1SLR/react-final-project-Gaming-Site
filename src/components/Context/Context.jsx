import { createContext, useState } from "react";


export const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [gamesData, setGamesData] = useState([]);
  const [bannerPhoto, setBannerPhoto] = useState([]);
  const [gamesdetails, setGamesDetails] = useState([]);
  const [dlcGamesData, setDlcGamesData] = useState([]);

  const Maturity = {
    mature: <img src="/Mature.svg" alt  ="mature"/>,
    "everyone-10-plus": <img src="/E10plus.svg" alt  ="mature"/>,
    teen:<img src="/Teen.svg" alt  ="teen"/>,
    "adults-only":<img src="/AO.svg" alt  ="adults-only"/>,
  }
 
  

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
        Maturity
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
