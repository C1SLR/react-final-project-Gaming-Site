import React, { useEffect } from "react";
import Allapi from "../all api/Allapi";

function GamingAPI() {
  useEffect(()=>{
    getListURL();
  },[])
  const getListURL = () => {
    Allapi.listURL.then((res) => {
      console.log(res.data.results);
    });
  };
  return <div>gaming api</div>;
}

export default GamingAPI;
