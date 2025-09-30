function GameDetails({ game }) {

    let minSpec = game?.min_spec?.replace(/^Minimum:/, "").trim();
      let recSpec = game?.rec_spec?.replace(/^Recommended:/, "").trim();


 
  return (
    <>
      <div className="flex flex-col gap-4 ">
        <div className="bg-blue-900 bg-gradient-to-l from-black to-70% from-40%">
          <h1 className="text-xl md:text-3xl  p-2  text-indigo-400">Details</h1>
        </div>
        <div className="bg-neutral-900  text-white text-shadow-[0_0_10px] text-shadow-black text-sm md:text-2xl p-2 flex gap-2 ">
          <div className="flex flex-col gap-2 rounded-lg text-blue-600 border-white  max-sm:w-7/12 md:w-4/12 lg:w-3/12 p-5 border">
            <h1 className="">Release Date:</h1>
            <h1>Developer:</h1>
            <h1>Rating:</h1>
            <h1>Platforms:</h1>
            <h1>Genre:</h1>
            <h1>Languages:</h1>
            <h1>Tags:</h1>
          </div>
          <div className="flex flex-col border rounded-lg p-5 w-full gap-2">
            <h1>{game.released}</h1>
            <h1>{game.developers?.join(", ")}</h1>
            <h1>{game.rating}/5</h1>
            <h1>{game.platforms?.join(", ")}</h1>
            <h1>{game.genre?.join(", ")}</h1>
            <h1>English</h1>
            <h1>{game.tags?.join(", ")}</h1>
          </div>
        </div>
        <div>
          <div className="bg-blue-900 bg-gradient-to-l from-black to-70% from-40%">
          <h1 className="text-xl p-2  text-indigo-400">Specifications</h1>
        </div>
          <div className="bg-neutral-900 text-lg md:text-2xl flex gap-3 max-md:flex-col text-white p-10">
            {/* //Minimum */}
            <div className="w-6/12 max-md:w-full">
              <div className="">
                <h1 className="text-center text-xl">MINIMUM</h1>
              </div>
              <div className="py-5">
                <p>{minSpec || "No data available"}</p>
              </div>
            </div>
            {/* //Recommended */}
           <div className="w-6/12 max-md:w-full">
              <div className="">
                <h1 className="text-center text-xl">RECOMMENDED</h1>
              </div>
              <div className="py-5">
                <p>{recSpec || "No data available"}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default GameDetails;
