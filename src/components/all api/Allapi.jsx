import axios from "axios";
const key = import.meta.env.VITE_GAMING_API;
const globalURL = axios.create({
  baseURL: "https://api.rawg.io/api",
});
export const listOfGames = async () => {
  const res = await globalURL.get(
    `/games?key=${key}&ordering=created&page_size=30`
  );
  return res.data.results;
};
export const popularGamesBanner = async () => {
  const res = await globalURL.get(
    `/games?key=${key}&ordering=-added&page_size=5`
  );
  return res.data.results;
};
export const listOfDlcGames = async () => {
  const res = await globalURL.get(`/games/${slug}/additions?key=${key}`);
  return res.data.results;
};
