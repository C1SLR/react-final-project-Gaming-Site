import { Link, useLocation } from "react-router-dom";
import Rating from "@mui/material/Rating";
import { useContext } from "react";
import { GameContext } from "../Context/Context";
import { IoDesktopSharp } from "react-icons/io5";
import { FaXbox } from "react-icons/fa";
import { FaApple, FaLinux, FaPlaystation } from "react-icons/fa";
import { BsNintendoSwitch } from "react-icons/bs";
import { FaAndroid } from "react-icons/fa";

const SearchGames = () => {
  const { Maturity } = useContext(GameContext);
  const location = useLocation();
  const { searchedGames, query } = location.state || {
    searchedGames: [],
    query: "",
  };
  const platIcons = {
    pc: <IoDesktopSharp />,
    xbox: <FaXbox />,
    playstation: <FaPlaystation />,
    mac: <FaApple />,
    nintendo: <BsNintendoSwitch />,
    linux: <FaLinux />,
    android: <FaAndroid />,
  };
  return (
    <div>
      <h1 className="text-white text-center text-2xl font-medium my-5">
        Search Results For :"{query}"
      </h1>
      {searchedGames.length > 0 ? (
        <div className="lg:gap-20 gap-10 flex flex-wrap justify-center   justify-self-center w-11/12">
          {searchedGames.map((val) => {
            return (
              <div key={val.id}>
                <div className="hover:scale-110 hover:transition duration-150 justify-self-center w-3xs py-5 text-white">
                  <Link to={`/game-details/${val.slug}`}>
                    <div className="bg-black rounded-xl bg-radial-[at_99%_90%] from-blue-700/70 via-55% from-10/% via-blue-900/30 overflow-hidden shadow-lg h-full">
                      <img
                        src={val.background_image}
                        className="h-50 w-full mask-b-from-60% mask-b-to-95% object-cover "
                        alt=""
                      />
                      <div>
                        <div>
                          <h1 className="text-center h-10 text-lg text-gray-200 font-medium">
                            {val.name}
                          </h1>
                        </div>
                        <div className="py-2">
                          <div className="flex flex-col px-4 py-2 w-full font-semibold">
                            <div className="flex items-center justify-between">
                              <p className="text-lg text-cyan-600">
                                {val.released?.split("-")[0]}
                              </p>
                              <Rating
                                name="half-rating-read"
                                defaultValue={val.rating}
                                precision={0.2}
                                readOnly
                              />
                            </div>
                          </div>
                        </div>
                        <div className="flex justify-between items-center gap-4">
                          <div className="px-4 flex items-center gap-4">
                            <span className="w-10">
                              {Maturity[val.esrb_rating?.slug] || "N/A"}
                            </span>
                            <div className="flex flex-col gap-2">
                              <p className="text-gray-500 text-xl font-semibold">
                                {val.genres[0]?.name}
                              </p>
                              <div className=" flex gap-1  text-2xl">
                                {val.parent_platforms?.map((plat) => (
                                  <span key={plat.platform?.id}>
                                    {platIcons[plat.platform?.slug] || "N/A"}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="text-gray-400 pt-6 pb-3 text-xl  flex justify-center">
                          <button className="cursor-pointer hover:text-white/90">
                            {" "}
                            View details
                          </button>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
                <p>{val.name}</p>
              </div>
            );
          })}
        </div>
      ) : (
        <>Not Found Any Thing</>
      )}
    </div>
  );
};

export default SearchGames;
