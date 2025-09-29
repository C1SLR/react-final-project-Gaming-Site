
import { useMemo } from "react";
import HeroSection from "../herosection/HeroSection";
import { IoSearch } from "react-icons/io5";
import NewReleaseCard from "../gaming card/NewReleaseCard";
import TopRatedCard from "../gaming card/TopRatedCard";
import MostPlayedCard from "../gaming card/MostPlayedCard";
import Genre from "./Genre";

function GamingAPI() {
  const popular2025Memo = useMemo(() => <NewReleaseCard />, []);
  const topRatedMemo = useMemo(() => <TopRatedCard />, []);
  const mostPlayedMemo = useMemo(() => <MostPlayedCard />, []);
  return (
    <div>
      <HeroSection />
      <div className="flex justify-center justify-self-center items-center my-10 w-8/12">
        <input
          type="text"
          placeholder="Search Here"
          className="bg-white/30 w-full p-2 text-white focus:outline-0 rounded-l-md"
        />
        <button className="bg-white/30 px-5 py-3 cursor-pointer rounded-r-md">
          <IoSearch />
        </button>
      </div>
      <div className="p-10">
        <div className="">
            <h1 className="text-4xl border-b-3 border-blue-900 p-5 text-white">Popular in 2025</h1>
            {popular2025Memo}
        </div>
        <div className="">
            <h1 className="text-4xl border-b-3 border-blue-900 p-5 text-white">Top Rated</h1>
            {topRatedMemo}
        </div>
        <div className="">
            <h1 className="text-4xl border-b-3 border-blue-900 p-5 text-white">Most Played</h1>
            {mostPlayedMemo}
        </div>
        <div className="">
            <h1 className="text-4xl text-center border-b-3 border-blue-900 p-5 text-white">Genres</h1>
            <Genre/>
        </div>
      </div>
      
    </div>
  );
}

export default GamingAPI;
