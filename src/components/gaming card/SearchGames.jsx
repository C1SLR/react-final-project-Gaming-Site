import { useLocation } from "react-router-dom";

const SearchGames = () => {
  const location = useLocation();
  const { searchedGames, query } = location.state || {
    searchedGames: [],
    query: "",
  };
  return (
    <div>
      <h1>Search Results For {query}</h1>
      {searchedGames.length > 0 ? (
        <div>
          {searchedGames.map((val) => {
            return (
              <div key={val.id}>
                <p>{val.name}</p>
                <img src={val.background_image} alt="notfounded" />
              </div>
            );
          })}
        </div>
      ) : (
        <>Not Found Any Thing</>
      )}
    </div>
  );
};

export default SearchGames;
