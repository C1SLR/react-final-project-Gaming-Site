import GamingCard from "../../gaming card/GamingCard"
import NewReleaseCard from "../../gaming card/NewReleaseCard"
import TopRatedCard from "../../gaming card/TopRatedCard"
import MostPlayedCard from "../../gaming card/MostPlayedCard"
import { useMemo } from "react"
function HomePage() {
   const popular2025Memo = useMemo(() => <NewReleaseCard />, []);
  const topRatedMemo = useMemo(() => <TopRatedCard />, []);
  const mostPlayedMemo = useMemo(() => <MostPlayedCard />, []);
    return(

      <>
      <div className="p-10">
        <div className="">
            <h1 className="text-4xl border-b-3 border-blue-900 p-5 text-white">Popular in 2025</h1>
            {popular2025Memo}
        </div>
        <div className="">
            <h1 className="text-4xl border-b-3 border-blue-900 p-5 text-white">Top Rated</h1>
            {topRatedMemo}
        </div>
        <div className="">
            <h1 className="text-4xl border-b-3 border-blue-900 p-5 text-white">Most Played</h1>
            {mostPlayedMemo}
        </div>
      </div>
      </>
    )
}
export default HomePage