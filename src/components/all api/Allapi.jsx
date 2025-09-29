import axios from "axios";
const key = import.meta.env.VITE_API_KEY;
const globalURL = axios.create({
  baseURL: "https://api.rawg.io/api",
});
export const listOfGames = async () => {
  const res = await globalURL.get(
    `/games?key=${key}&ordering=releases&page_size=20`
  );
  return res.data.results;
};
export const popularGamesBanner = async () => {
  const res = await globalURL.get(
    `/games?key=${key}&ordering=-added&page_size=5`
  );
  return res.data.results;
};
export const gameDetails = async (gameSlug) => {
    const res = await globalURL.get(`/games/${gameSlug}?key=${key}`)
    return res.data;
}
export const listOfDlcGames = async (gameSlug) => {
  const res = await globalURL.get(`/games/${gameSlug}/additions?key=${key}`);
  return res.data;
};
export const screenShots = async (gameSlug) => {
  const res = await globalURL.get(`/games/${gameSlug}/screenshots?key=${key}`);
  return res.data.results;
};
