import { useState, useEffect, useContext } from "react";
import { popular2025 } from "../all api/Allapi";
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

const NewReleaseCard = ({ slug }) => {
  const platIcons = {
    pc: <IoDesktopSharp />,
    xbox: <FaXbox />,
    playstation: <FaPlaystation />,
    mac: <FaApple />,
    nintendo: <BsNintendoSwitch />,
    linux: <FaLinux />,
    android: <FaAndroid />,
  };

  const { Maturity } = useContext(GameContext);
  const [newGamesData, setNewGamesData] = useState([]);
  useEffect(() => {
    popular2025().then((filtered) => {
      setNewGamesData(filtered);

      // console.log(filtered);
    });
  }, []);
  return (
    <div>
      {!newGamesData || newGamesData?.length == 0 ? (
         <div className="flex gap-4 py-10 justify-evenly">
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </div>
      ) : (
        <div className="flex border gap-4">
            <Swiper spaceBetween={60}  slidesPerView={6}>
              onSlideChange{()=> console.log('slide Change')}
                    onSwiper={(swiper) => console.log(swiper)}
             
          {newGamesData.map((val) => (

            <SwiperSlide>

            <div
              key={val.id}
              className=" hover:scale-100 scale-93 hover:transition cursor-pointer"
            >
              <div className="w-3xs py-5 text-white">
                <Link to={`/game-details/${val.slug}`}>
                  <div className="bg-black rounded-xl bg-radial-[at_99%_90%] from-blue-700/70 via-55% from-10/% via-blue-900/30 overflow-hidden shadow-lg h-full">
                    <img
                      src={val.background_image}
                      loading="lazy"
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
                              {/* <span>
                            <IoDesktopSharp />
                          </span>
                          <span>
                            <FaPlaystation />
                          </span>
                          <span>
                            <FaXbox />
                          </span> */}
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
                        <button> View details</button>
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

export default NewReleaseCard;
