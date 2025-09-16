import { useEffect, useState } from "react";
import axios from "axios";
import GamingCard from "./components/gaming card/GamingCard";
import GamingAPI from "./components/gaming api/GamingAPI";
import Allapi from "./components/all api/Allapi";


function App() {


 const [gameData, setGameData] = useState([])
 
 
 
   useEffect(()=>{
 
     const data = async() => {
 
       try {
         const list = await Allapi.listURL;
 //Used map to contain only specific data needed 
         const games = list.data.results.map((game) => ({

          id: game.id,
          title: game.name,
          //released = "2013-05-07" (for example)
          //released.split("-") => [2013, 05, 07]
          //index 0: Year; index 1: Month; index 2: Day
                                     
          released: game.released.split("-")[0],
          bg: game.background_image,
          img:game.genres[0].image_background


         }));
         setGameData(games)
         
         
       } catch (error) {
         console.log(error)
       }
 
     }
     data();
   },[])



  return (
    <>
     <div className="flex flex-wrap justify-evenly gap-3 p-10">
      {gameData.map((game) => 
      
      <div key={game.id}>

        <GamingCard game={game}/>
      </div> 

      
      
      
     
       )}
     <GamingAPI/>
      
     </div>
    </>
  );
}

export default App;
