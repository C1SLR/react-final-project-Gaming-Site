import { useEffect } from "react"
import { GameContext } from "../Context/Context.jsx"
import {listOfGenres} from "../all api/Allapi.jsx"
import { useContext } from "react"

function Genre() {
    const {genres, setGenres} = useContext(GameContext)
    useEffect(() => {
        listOfGenres().then((popular) => {
            setGenres(popular); 
            console.log(popular);
        })
      
    },[])
    return(
        <div className="flex justify-center w-full border text-white">
            <div className="w-10/12 flex flex-wrap justify-center gap-10 p-10">
           {genres.map((genre,index)=> (

            <div style={{backgroundImage:`url(${genre.image_background})`}} className= "w-80 border bg-no-repeat bg-cover rounded-3xl p-20" key={index}>
                <h1 className="text-5xl text-center font-semibold">{genre.name}</h1>
            </div>

           ))}
            {/* <div className="bg-red-500 w-fit p-20">
                <h1 className="text-5xl font-semibold">Fighting</h1>
            </div>
            <div className="bg-red-500 w-fit p-20">
                <h1 className="text-5xl font-semibold">Fighting</h1>
            </div>
            <div className="bg-red-500 w-fit p-20">
                <h1 className="text-5xl font-semibold">Fighting</h1>
            </div>
            <div className="bg-red-500 w-fit p-20">
                <h1 className="text-5xl font-semibold">Fighting</h1>
            </div> */}
            </div>
        </div>
    )
}
export default Genre;