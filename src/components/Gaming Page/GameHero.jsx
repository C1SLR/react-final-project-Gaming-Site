import { useState, useEffect } from "react";
import { trailers } from "../all api/Allapi";
import { useParams } from "react-router-dom";
import HeroSkeleton from "../gaming card/Skeleton/HeroSkeleton"
import Modal from "@mui/material/Modal";
function GameHero({ game }) {
  const [showModal, setShowModal] = useState(false)
  const [trailer, setTrailer] = useState([]);
  const { slug } = useParams();
  const [imgLoaded, setImgLoaded] = useState(false);
  useEffect(() => {
    trailers(slug).then((res) => {
      setTrailer(res.data.results);
      console.log("Trailers", res.data.results);
    });
  
  }, []);
  useEffect(() => {
    if (game?.img) {
      const img = new Image();
      img.src = game.img;
      img.onload = setImgLoaded(true)
    }
  },[game])
  return (
    <>
      {game && imgLoaded ? (


        <div
        style={{ backgroundImage: `url(${game.img})` }}
        className="bg-no-repeat bg-cover lg:bg-contain sm:h-fit md:h-120 xl:h-160 bg-right flex flex-col"
      >
        <div className="p-2 md:p-4 xl:p-10 h-full bg-gradient-to-r from-black from-25% to-70%">
          <div className="flex h-full  border-2 p-5 mask-r-from-60% mask-r-to-70% justify-between flex-col text-white text-shadow-lg text-shadow-black gap-4 ">
            <div className="flex flex-col pb-8">
              <h1 className="text-xl sm:text-2xl md:text-6xl font-thin font">
                {game.name}
              </h1>
              <h1 className="text-xs md:py-3 md:text-xl lg:text-4xl font-semibold">
                {game.publisher}
              </h1>
            </div>
            <div className="flex flex-col gap-1 md:gap-4">
              <h1 className="text-sm md:text-3xl ">Watch trailer</h1>
              {!trailer.length == 0 ? (
                <div className="w-[10rem] md:w-[15rem] border">
                  <div>
                    <img src={trailer[0].preview} />
                  </div>
                </div>
              ) : (
                <div onClick={handleOpen} className="bg-neutral-900 h-14 w-25 md:h-30 md:w-50">
                  <h1 className=" flex font-thin text-sm md:text-xl md:py-11 justify-center py-4">
                    No trailer
                  </h1>
                   <Modal open={open} onClose={handleClose}>
         <div>
          
         </div>

      </Modal>
                </div>
                
              )}
            </div>
          </div>
        </div>
      </div>
      ) : (

      <HeroSkeleton/>

      )}
    </>
  );
}
export default GameHero;
