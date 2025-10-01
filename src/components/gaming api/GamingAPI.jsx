import { useContext, useMemo } from "react";
import HeroSection from "../herosection/HeroSection";
import { IoSearch } from "react-icons/io5";
import NewReleaseCard from "../gaming card/NewReleaseCard";
import TopRatedCard from "../gaming card/TopRatedCard";
import MostPlayedCard from "../gaming card/MostPlayedCard";
import Genre from "./Genre";
import { GameContext } from "../Context/Context";
import { searchapi } from "../all api/Allapi";
import { useNavigate } from "react-router-dom";

function GamingAPI() {
  
  const navigate = useNavigate();
  const { searchGames, setSearchGames } = useContext(GameContext);
  const popular2025Memo = useMemo(() => <NewReleaseCard />, []);
  const topRatedMemo = useMemo(() => <TopRatedCard />, []);
  const mostPlayedMemo = useMemo(() => <MostPlayedCard />, []);
  const searchHandler = async () => {
    setSearchGames(searchapi);
    if (!searchGames) return;

    try {
      const res = await searchapi(searchGames);
      navigate("/search-results", {
        state: { searchedGames: res, query: searchGames },
      });
      // console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <HeroSection />
      <div className="lg:w-6/12 md:w-8/12 flex justify-self-center items-center my-10 w-11/12">
        <input
          type="text"
          placeholder="Search Here"
          className="bg-white/20 w-full p-3 text-white focus:outline-0 rounded-l-full"
          onChange={(e) => {
            setSearchGames(e.target.value);
          }}
        />
        <button
          className="bg-linear-0 hover:to-blue-600 transition delay-100 ease-in-out  to-blue-800 text-white px-5 py-4 cursor-pointer rounded-r-full"
          onClick={searchHandler}
        >
          <IoSearch />
        </button>
      </div>
      <div className="p-4 md:p-10 font-semibold text-3xl sm:text-4xl text-center sm:text-start">
        <div className="">
          <h1  className="border-b-3 border-blue-900 p-5 text-white">
            Popular in 2025
          </h1>
          {popular2025Memo}
        </div>
        <div className="">
          <h1 className=" border-b-3 border-blue-900 p-5 text-white">
            Top Rated
          </h1>
          {topRatedMemo}
        </div>
        <div className="">
          <h1 className=" border-b-3 border-blue-900 p-5 text-white">
            Most Played
          </h1>
          {mostPlayedMemo}
        </div>
        <div className="">
          <h1 className="text-4xl text-center border-b-3 border-blue-900 p-5 text-white">
            Genres
          </h1>
          <Genre />
        </div>
      </div>
    </div>
  );
}

export default GamingAPI;
