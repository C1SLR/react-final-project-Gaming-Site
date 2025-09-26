import axios from "axios";

const key = import.meta.env.VITE_GAMING_API;

const globalURL = axios.create({
  baseURL: "https://api.rawg.io/api",
});

export const listOfGames = async () => {
  const res = await globalURL.get(`/games?key=${key}&page_size=40`);
  return res.data.results;
};

export const listOfDlcGames = async () => {
  const res = await globalURL.get(`/games/{game_pk}/additions?key=${key}`);
  return res.data.results;
};