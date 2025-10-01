import { useContext, useEffect, useState } from "react";
import { popularGamesBanner } from "../all api/Allapi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { GameContext } from "../Context/Context";
import Loader from "../../reusable components/screen loader/DefaultLoader";
const HeroSection = () => {
  const { bannerPhoto, setBannerPhoto } = useContext(GameContext);
  useEffect(() => {
    popularGamesBanner().then((res) => {
      setBannerPhoto(res);
    });
  }, []);
  const swiperParams = {
    autoplay: { delay: 3000, disableOnInteraction: false },
    loop: true,
  };
  return (
    <div>
      <h1 className="md:text-4xl text-3xl lg:text-6xl text-center font-customTwo mb-10 my-5">
        Leading Gaming Industry
      </h1>
      {bannerPhoto.length > 0 ? (
        <div className="w-full justify-self-center mx-10 border-2 shadow sm:w-10/12 lg:w-8/12">
          <Swiper {...swiperParams}
            pagination={true}
            modules={[Autoplay, Pagination]}
            className="mySwiper w-full justify-self-end overflow-hidden"
          >
            {bannerPhoto.map((val) => (
              <SwiperSlide>
                <div className="relative">
                  <img src={val.background_image} alt="notfound" />
                  <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black/80 to-transparent">
                    <p className="lg:text-4xl md:text-3xl font-customOne text-2xl text-shadow-black text-gray-200/80 capitalize p-2">
                      {val.slug}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ) : (
        <Loader/>
      )}
    </div>
  );
};

export default HeroSection;
