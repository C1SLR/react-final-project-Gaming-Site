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
          <div className="flex flex-col gap-2 w-[12rem] rounded-lg text-blue-600 border-white md:w-4/12 lg:w-4/12 p-5  border">
            <h1>Release Date:</h1>
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
          <div className="text-gray-200/80">
            <div>
              <div className="bg-gradient-to-l to-white/15 mx-5 px-5">
                <h1 className="text-xl lg:text-3xl my-5">MINIMUM</h1>
              </div>
              <div className="bg-white/10 p-5 rounded m-5 py-5">
                <p>{minSpec || "No data available"}</p>
              </div>
            </div>
            <div>
              <div className="bg-gradient-to-l to-white/15 mx-5 px-5">
                <h1 className="text-xl lg:text-3xl">RECOMMENDED</h1>
              </div>
              <div className="bg-white/10 p-5 rounded m-5 py-5">
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
