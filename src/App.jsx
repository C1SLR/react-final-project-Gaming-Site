import { useEffect, useState } from "react";
import axios from "axios";
import GamingCard from "./components/gaming card/GamingCard";
import GamingAPI from "./components/gaming api/GamingAPI";

function App() {
  return (
    <>
      <GamingCard />
      <GamingAPI />
    </>
  );
}

export default App;
