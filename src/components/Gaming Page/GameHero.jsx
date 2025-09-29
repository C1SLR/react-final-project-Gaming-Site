import GameDetails from "./GameDetails";
function GameHero({game}) {
  return (
    <>
      
        <div style={{backgroundImage: `url(${game.img})`}} className="bg-no-repeat bg-contain h-150 bg-right flex flex-col">
          <div className="p-10 h-full bg-gradient-to-r from-black from-25% to-70%">
            <div className="flex h-full border p-5 justify-between flex-col text-white text-shadow-lg text-shadow-black gap-4 pt-10">
              <div className="flex gap-3 flex-col">
                <h1 className="text-5xl">{game.name}</h1>
                <h1 className="text-3xl">{game.publisher}</h1>
                 </div>
                <div className="flex flex-col gap-3">
                  <h1 className="text-3xl pb-3">Watch trailer</h1>
                  <div className="bg-blue-900 h-25 w-40 "> </div>
  
              </div>
            </div>
          </div>
        </div>
    
    </>
  );
}
export default GameHero;
