import { useContext } from "react";
import { GameContext } from "../../components/Context/Context";
import { IoSearch } from "react-icons/io5";

const SearchApi = () => {
  const { searchHandler, setSearchGames } = useContext(GameContext);
  return (
    <form
      onSubmit={searchHandler}
      className="lg:w-6/12 md:w-8/12 flex justify-self-center items-center my-10 w-11/12"
    >
      <input
        type="text"
        placeholder="Search Here"
        className="bg-white/20 w-full p-3 text-white focus:outline-0 rounded-l-full"
        onChange={(e) => {
          setSearchGames(e.target.value);
        }}
      />
      <button
        type="submit"
        className="bg-linear-0 hover:to-blue-600 transition delay-100 ease-in-out  to-blue-800 text-white px-5 py-4 cursor-pointer rounded-r-full"
        onClick={searchHandler}
      >
        <IoSearch />
      </button>
    </form>
  );
};

export default SearchApi;
