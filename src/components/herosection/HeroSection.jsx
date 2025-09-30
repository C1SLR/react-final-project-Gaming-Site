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
      {bannerPhoto.length > 0 ? (
        <div className="w-full justify-self-center mx-10 border-2 shadow sm:w-10/12 lg:w-8/12">
          <Swiper
            pagination={true}
            modules={[Pagination]}
            className="mySwiper w-full justify-self-end overflow-hidden"
          >
            {bannerPhoto.map((val) => (
              <SwiperSlide>
                <img src={val.background_image} alt="notfound" />
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
