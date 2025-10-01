function HeroSkeleton() {

   return(
    
    <div className="bg-gray-900 animate-pulse p-2 h-fit lg:p-10 md:h-120 xl:h-160">
        <div className="flex flex-col justify-between h-full p-3">
          <div className="flex flex-col gap-2 md:gap-4">
            <div className="bg-gray-700 animate-pulse  h-6 md:h-15"></div>

            <div className="bg-gray-700 w-3/12 h-3 md:h-8 animate-pulse"></div>
          </div>
          <div className="flex flex-col gap-2 md:gap-4">
            <div className="bg-gray-700 w-2/12 h-3 md:h-6  md:w-40 animate-pulse lg:h-8"></div>
                       <div className="bg-gray-700 w-3/12 md:w-55 lg:w-3/12  h-12 md:h-25   animate-pulse lg:h-30"> </div>

          </div>
        </div>
      </div>
    
   )
};

export default HeroSkeleton;