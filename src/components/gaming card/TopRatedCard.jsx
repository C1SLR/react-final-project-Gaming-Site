import {useState, useEffect, useContext } from "react";
import { topRatedGames } from "../all api/Allapi";
import { Link } from "react-router-dom";
import { GameContext } from "../Context/Context";
import { FaAndroid } from "react-icons/fa";
import { IoDesktopSharp } from "react-icons/io5";
import { FaApple, FaLinux, FaPlaystation } from "react-icons/fa";
import { FaXbox } from "react-icons/fa";
import { BsNintendoSwitch } from "react-icons/bs";
import Rating from "@mui/material/Rating";
import Skeleton from "./Skeleton/Skeleton";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";


const TopRatedCard = () => {
  const platIcons = {
    pc: <IoDesktopSharp />,
    xbox: <FaXbox />,
    playstation: <FaPlaystation />,
    mac: <FaApple />,
    nintendo: <BsNintendoSwitch />,
    linux: <FaLinux />,
    android: <FaAndroid />,
  };

  const {Maturity, playHover, playClick } = useContext(GameContext);
  const [ratedGames, setRatedGames] = useState([])
  useEffect(() => {
    topRatedGames().then((filtered) => {
      setRatedGames(filtered);
    });
  }, []);
 return (
    <div>
      {!ratedGames || ratedGames?.length === 0 ? (
          <div className="flex gap-4 py-10 justify-center">
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </div>
      ) : (
        <div className="flex gap-4 justify-center">
           <Swiper
           slidesPerView={1}
           spaceBetween={15}

           breakpoints={{
            
              560: {
                slidesPerView: 2,

              },
              
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },

              1280: {
                slidesPerView: 5,
                
              },
            }}
          >
             
             
          {ratedGames?.map((val) => (

            <SwiperSlide>

            <div
            onMouseEnter={playHover} onClick={playClick}
              key={val.id}
              className="  hover:scale-100 md:scale-93 transition ease-in-out duration-300 cursor-pointer"
            >
              <div className="max-sm:flex justify-center py-5 text-white">
                <Link to={`/game-details/${val.slug}`}>
                  <div className="bg-black rounded-xl bg-radial-[at_99%_90%] hover:from-blue-600/80 hover:via-65% transition ease-in-out from-blue-700/70 via-55% via-blue-900/30 overflow-hidden shadow-lg h-full">
                    <img
                      src={val.background_image}
                      loading="lazy"
                      className="h-50 w-full mask-b-from-60% mask-b-to-95% object-cover "
                      alt=""
                    />
                    <div>
                      <div>
                        <h1 className="text-center transition-all duration-100 ease-in-out hover:text-shadow-[0_0_10px] h-10 text-lg text-gray-200 font-medium">
                          {val.name}
                        </h1>
                      </div>
                      <div className="py-2">
                        <div className="flex flex-col px-4 py-2 w-full font-semibold">
                          {/* <div className="text-xl font-bold">
                            <h1>{val.title}</h1>
                          </div> */}

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
                        <button className="hover:text-gray-200 cursor-pointer"> View details</button>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            </SwiperSlide>
          ))}
             </Swiper>

        </div>
      )}
    </div>
  );
};

export default TopRatedCard;
