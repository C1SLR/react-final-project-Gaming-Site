
import HeroSection from "../herosection/HeroSection";
import { IoSearch } from "react-icons/io5";
import GamingCard from "../gaming card/GamingCard";
import HomePage from "./Home page/HomePage";

function GamingAPI() {
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
      <HomePage/>
    </div>
  );
}

export default GamingAPI;
