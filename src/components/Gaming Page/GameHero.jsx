import GameDetails from "./GameDetails";
function GameHero({game}) {
  return (
    <>
      
        <div style={{backgroundImage: `url(${game.img})`}} className="bg-no-repeat bg-cover lg:bg-contain sm:h-fit md:h-120 lg:h-140 bg-right flex flex-col">
          <div className="p-2 md:p-4 h-full bg-gradient-to-r from-black from-25% to-70%">
            <div className="flex h-full  border-2 p-5 mask-r-from-60% mask-r-to-70% justify-between flex-col text-white text-shadow-lg text-shadow-black gap-4 ">
              <div className="flex flex-col pb-8">
                <h1 className="text-xl sm:text-2xl md:text-6xl">{game.name}</h1>
                <h1 className="text-xs md:py-3 md:text-xl">{game.publisher}</h1>
                 </div>
                <div className="flex flex-col gap-1 md:gap-4">
                  <h1 className="text-sm md:text-3xl ">Watch trailer</h1>
                  <div className="bg-blue-900 h-14 w-25 md:h-30 md:w-50 "> </div>
  
              </div>
            </div>
          </div>
        </div>
    
    </>
  );
}
export default GameHero;
