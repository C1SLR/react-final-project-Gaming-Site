import React, { useEffect, useState, useContext } from "react";
import Allapi from "../all api/Allapi";
import GamingCard from "../gaming card/GamingCard";
import { GameContext } from "../Context/Context";




function GamingAPI() {
  
  const {setGameData} = useContext(GameContext);
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

          console.log(games);
          setGameData(games);
        } catch (error) {
          console.log(error);
        }
      };
      data();
    }, []);

  return(

    <>
      <GamingCard/>
    </>
  )
}

export default GamingAPI;
