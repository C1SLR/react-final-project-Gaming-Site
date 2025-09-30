import { useEffect } from "react"
import { GameContext } from "../Context/Context.jsx"
import {listOfGenres} from "../all api/Allapi.jsx"
import { useContext } from "react"

function Genre() {
    const {genres, setGenres} = useContext(GameContext)
    useEffect(() => {
        listOfGenres().then((popular) => {
            setGenres(popular); 
            // console.log(popular);
        })
      
    },[])
    return(
        <div className="flex text-white">
           <div className="flex flex-wrap justify-center w-full gap-5 py-20">
        {genres.map((genre, index) => (
          <div
            style={{ backgroundImage: `url(${genre.image_background})` }}
            className="w-10/12 md:w-5/12 lg:w-3/12 border bg-no-repeat bg-cover hover:scale-100 scale-95 transition ease-in-out rounded-3xl "
            key={index}
          >
            <h1 className="text-4xl bg-black/30 hover:text-shadow-[5px_5px_4px] max-md:bg-transparent max-md:text-shadow-[5px_5px_4px] max-md:to-black/60  text-shadow-black  bg-radial-[at_50%_50%] hover:to-black/60 hover:bg-transparent transition duration-300 ease-in-out  from-55% rounded-3xl md:text-3xl drop-shadow-[0_0_5px] drop-shadow-black font-semibold p-18 text-center">
              {genre.name}
            </h1>
          </div>
        ))}
      </div>
        </div>
    )
}
export default Genre;