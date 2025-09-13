import { useEffect, useState } from "react";
import axios from "axios";

function App() {

  const key = import.meta.env.API_KEY;
  const database = async() => {
    const url = `https://api.rawg.io/api/games?key=${key}&dates=2019-09-01,2019-09-30&platforms=18,1,7`
    await axios.get(url)
    .then(response => {console.log(response.data)})
    .catch(error => {console.error(error)})
  


  }

  useEffect(() => {database()},[])
  return <>
  <div><h1 className="bg-amber-400 text-2xl">header</h1></div>
  </>;
}

export default App;
