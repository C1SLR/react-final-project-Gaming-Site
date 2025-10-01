import { useMemo } from "react";
import HeroSection from "../herosection/HeroSection";

import NewReleaseCard from "../gaming card/NewReleaseCard";
import TopRatedCard from "../gaming card/TopRatedCard";
import MostPlayedCard from "../gaming card/MostPlayedCard";
import Genre from "./Genre";
import { useNavigate } from "react-router-dom";
import SearchApi from "../../reusable components/search games/SearchApi";

function GamingAPI() {
  
  const popular2025Memo = useMemo(() => <NewReleaseCard />, []);
  const topRatedMemo = useMemo(() => <TopRatedCard />, []);
  const mostPlayedMemo = useMemo(() => <MostPlayedCard />, []);

  return (
    <div>
      <HeroSection />
      <SearchApi />
      <div className="p-4 md:p-10 font-semibold text-3xl sm:text-4xl text-center sm:text-start">
        <div className="">
          <h1 className="border-b-3 border-blue-900 p-5 text-white">
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
