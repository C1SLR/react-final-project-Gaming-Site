import { useContext, useEffect, useState } from "react";
import { popularGamesBanner } from "../all api/Allapi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { GameContext } from "../Context/Context";
const HeroSection = () => {
  const { bannerPhoto, setBannerPhoto } = useContext(GameContext);
  useEffect(() => {
    popularGamesBanner().then((res) => {
      setBannerPhoto(res);
    });
  }, []);
  return (
    <div>
      <h1 className="xl:text-8xl lg:text-6xl text-4xl text-white/80 text-center font-customTwo mb-10 my-5">
        Leading Gaming Industry
      </h1>
      {bannerPhoto.length > 0 ? (
        <div className="w-full justify-self-center mx-10 border-2 shadow sm:w-10/12 lg:w-8/12">
          <Swiper
            pagination={true}
            modules={[Pagination]}
            className="mySwiper w-full justify-self-end overflow-hidden"
          >
            {bannerPhoto.map((val) => (
              <SwiperSlide>
                <div className="relative">
                  <img src={val.background_image} alt="notfound" />
                  <div className="absolute bottom-0 left-0 rounded bg-gradient-to-t from-black/80 to-transparent p-5">
                    <p className="md:text-4xl text-3xl font-customOne  text-shadow-black text-gray-200/80 capitalize">
                      {val.slug}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ) : (
        <div className="text-white">Loading</div>
      )}
    </div>
  );
};

export default HeroSection;
