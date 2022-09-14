import { useState } from "react";

function Search({ searchHandler }) {
  const [character, setCharacter] = useState("");

  const handleSearch = (e) => {
    setCharacter(e.target.value);
    searchHandler(e.target.value);
  };

  return (
    <>
      <label>Search SHAREA</label>
      <input type="text" className="search-bar" value={character} onChange={handleSearch}/>
    </>
  );
}

export default Search;