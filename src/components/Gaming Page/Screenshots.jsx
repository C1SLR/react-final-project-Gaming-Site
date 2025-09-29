import { useEffect, useState } from "react";
function Screenshots({picture}) {

    const [mainImg, setMainImg] = useState(null)
    useEffect(() => {

        if (picture.length > 0) {
            setMainImg(picture[0].image)
        }
    },[picture])
    return (
    <div>
      <div className="bg-blue-900 bg-gradient-to-l from-black to-70% from-40%">
        <h1 className="text-4xl text-indigo-950 p-4">Screenshots</h1>
      </div>
      {!picture ? (
       <div><h1>Loading...</h1></div>

      ): (



      <div className="flex gap-2 flex-col p-10">
        <div className="flex justify-center">
         <img src={mainImg} className="hover:shadow-blue-400/30 hover:scale-[1.01] transition ease-in-out duration-500 shadow-[0_0_30px]" alt="" />
        </div>
        <div className="flex gap-8 justify-center p-5">
            {picture?.map((pics, index) => 
                (<div className="hover:scale-120 transition duration-300 ease-in-out" key={index}>
                    <img  src={pics?.image} className={`object-cover w-80 h-30 cursor-pointer border-2 ${mainImg === pics.image ? "border-blue-600 transition ease-in" : "border-transparent"}`} onClick={()=> setMainImg(pics?.image)} alt="" />
                </div>
            ))}
        </div>
      </div>

      )}
    </div>
  );
}
export default Screenshots;