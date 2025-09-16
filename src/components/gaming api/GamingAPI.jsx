import React, { useEffect, useState } from "react";
import Allapi from "../all api/Allapi";

function GamingAPI() {
// const key= import.meta.env.VITE_GAMING_API;

//   const [dlc, setDlc] = useState([]);

//   useEffect(() => {
    
//     const getDLC = async() =>{

//       const gtaID = 3498
//       const url = Allapi.globalURL;
//       const DLClist = await url.get(`/games/${gtaID}/game-series?key=${key}`);
      
//       console.log(DLClist.data.results);

      
//     }
//     getDLC()
//   }
  
  
//   ,[])


 return <div>gaming api</div>;
 };


export default GamingAPI; 





//Old code  ------------------------------------------



// const [gameData, setGameData] = useState([])



//   useEffect(()=>{

//     const data = async() => {

//       try {
//         const list = await Allapi.listURL;

//         const games = list.data.results;
        
//         setGameData({
//           name: games[0].name,
//           bg:games[0].background_image,
//           released: games[0].released.split("-",[0])
          

//         })
//       } catch (error) {
//         console.log(error)
//       }

//     }
//     data();
//   },[])



  // const getListURL = () => {
  //   Allapi.listURL.then((res) => {
  //     console.log(res.data.results);
  //   });
  


  
