import axios from "axios";
const key = import.meta.env.VITE_GAMING_API;
const globalURL = axios.create({
  baseURL: "https://api.rawg.io/api",
});
export const listOfGames = async () => {
  const res = await globalURL.get(
    `/games?key=${key}&ordering=-updated&page_size=10`
  );
  const filtered = res.data.results.filter(
    (game) => game.esrb_rating && game.esrb_rating.slug !== "adults-only"
  );
};

export const listOfGenres = async () => {
  const res = await globalURL.get(
    `/genres?key=${key}`
  )
  const popular = res.data.results.filter(
    (genre) => genre.id < 6
  );
  return popular;
}

export const popular2025 = async () => {
  const start2025 = "2025-01-01";
  const end2025 = "2025-12-31";
  const res = await globalURL.get(
    `/games?key=${key}&dates=${start2025},${end2025}&ordering=-added&page_size=40`
  );
  const filtered = res.data.results.filter(
    (game) => game.rating > 0 && game.esrb_rating && game.playtime > 0
  );
  return filtered.slice(0, 9);
};

export const mostPlayedGames = async () => {
  const res = await globalURL.get(
    `/games?key=${key}&ordering=releases&page_size=20`
  );
  const sorted = res.data.results
    .filter((game) => game.playtime)
    .sort((a, b) => b.playtime - a.playtime);
  return sorted.slice(0, 6);
};

export const topRatedGames = async () => {
  const res = await globalURL.get(
    `/games?key=${key}&ordering=-rating&page_size=30`
  );
  const filtered = res.data.results.filter(
    (game) => game.esrb_rating && game.esrb_rating.slug !== "adults-only"
  );

  return filtered.slice(0, 6);
};
export const popularGamesBanner = async () => {
  const res = await globalURL.get(
    `/games?key=${key}&ordering=-added&page_size=5`
  );
  return res.data.results;
};
export const gameDetails = async (gameSlug) => {
  const res = await globalURL.get(`/games/${gameSlug}?key=${key}`);
  return res.data;
};
// export const listOfDlcGames = async (gameSlug) => {
//   const res = await globalURL.get(`/games/${gameSlug}/additions?key=${key}`);
//   return res.data;
// };
export const screenShots = async (gameSlug) => {
  const res = await globalURL.get(`/games/${gameSlug}/screenshots?key=${key}`);
  return res.data.results;
};
