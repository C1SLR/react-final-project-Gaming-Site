function GameDetails({ game }) {
    // if (!game || !game.min_spec) return <div>Loading...</div>;

    // Remove "Minimum:" at the start if it exists
    let minSpec = game?.min_spec?.replace(/^Minimum:/, "").trim();
      let recSpec = game?.rec_spec?.replace(/^Recommended:/, "").trim();

  //   const soundCardIndex = minSpec.indexOf("Sound Card:");
  //   if (soundCardIndex !== -1) {
  //     minSpec = minSpec.slice(0, soundCardIndex).trim();
  //   }

  //   const soundCardIndexRec = recSpec.indexOf("Sound Card:");
  //   if (soundCardIndexRec !== -1) {
  //     recSpec = recSpec.slice(0, soundCardIndexRec).trim();
  //   }
  //   // Add a newline before common section headings
  //   const formattedSpec = minSpec
  //     .replace(/OS:/g, "\nOS:")
  //     .replace(/Processor:/g, "\nProcessor:")
  //     .replace(/Memory:/g, "\nMemory:")
  //     .replace(/Graphics:/g, "\nGraphics:")
  //     .replace(/Storage:/g, "\nStorage:");

  //     const formattedRecSpec = recSpec
  //     .replace(/OS:/g, "\nOS:")
  //     .replace(/Processor:/g, "\nProcessor:")
  //     .replace(/Memory:/g, "\nMemory:")
  //     .replace(/Graphics:/g, "\nGraphics:")
  //     .replace(/Storage:/g, "\nStorage:");

  //   const recLines =  formattedRecSpec
  //    .split("\n")
  //     .map((recLine) => recLine.trim())
  //     .filter((recLine) => recLine);
  //   const lines = formattedSpec
  //     .split("\n")
  //     .map((line) => line.trim())
  //     .filter((line) => line);

  return (
    <>
      <div className="flex flex-col gap-4 ">
        <div className="bg-blue-900 bg-gradient-to-l from-black to-70% from-40%">
          <h1 className="text-4xl text-indigo-950 p-4">Details</h1>
        </div>
        <div className="bg-neutral-900  text-white text-shadow-[0_0_10px] text-shadow-black text-2xl p-10 flex gap-10 ">
          <div className="flex flex-col gap-2 rounded-lg text-blue-900 border-white w-3/12 p-5 border">
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
            <h1 className="text-4xl text-indigo-950 p-4">Specifications</h1>
          </div>
          <div className="bg-neutral-900 text-2xl flex text-white p-10">
            {/* //Minimum */}
            <div className="w-6/12">
              <div className="pb-6">
                <h1 className="text-center text-4xl">MINIMUM</h1>
              </div>
              <div className="">
                  <p>{minSpec || "No data available"}</p>
                {/* {lines.map((line, index) => (
                  <p key={index} className="">
                    {line}
                  </p>
                ))} */}
              </div>
            </div>
            {/* //Recommended */}
            <div className="w-6/12">
              <div className="pb-6">
                <h1 className="text-center text-4xl">RECOMMENDED</h1>
              </div>
              <div className=" ">
                  <p>{recSpec || "No data available"}</p>
                {/* {recLines.map((recLine, i) => (
                  <p key={i} className="">
                    {recLine}
                  </p>
                ))} */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default GameDetails;
