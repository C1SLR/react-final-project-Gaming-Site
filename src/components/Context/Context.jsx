import { createContext } from "react";
import GamingAPI from "../gaming api/GamingAPI";


 export const GameContext = createContext()




 const [gameData, setGameData] = useState([]);

 
function Context() {
             return(
                <>
                <GameContext.Provider value={{gameData,setGameData}}>
                  <GamingAPI/>
                </GameContext.Provider>
                </>
             )


}

export default Context;