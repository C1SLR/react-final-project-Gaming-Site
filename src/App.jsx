import { useEffect, useState } from "react";
import axios from "axios";
import GamingCard from "./components/gaming card/GamingCard";
import GamingAPI from "./components/gaming api/GamingAPI";
import Allapi from "./components/all api/Allapi";
import NavBar from "./components/nav bar/NavBar";
import { Outlet } from "react-router-dom";

function App() {

 

  return (
    <div className="bg-black/95">
      <NavBar />
      <Outlet />
    
    </div>
  );
}

export default App;
