import { useState } from "react";

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
  </>;
}

export default App;
