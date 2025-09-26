import axios from "axios";

const key= import.meta.env.VITE_API_KEY;


    const globalURL = axios.create({
        baseURL:"https://api.rawg.io/api"
    })
    const listURL = globalURL.get(`/games?key=${key}`);

    

  


export default {listURL,globalURL};
