import { useState , useContext, useEffect} from "react";
import { AuthContext } from "../../Context/Context";


function Search({character, setCharacter}) {
  const {images, setImages} = useContext(AuthContext);
  const [filter, setFilter] = useState([])

  return (
    <>
      <label>Search SHAREA</label>
      <input type="text" className="search-bar" value={character} onChange={(e) => setCharacter(e.target.value)}/>
    </>
  );
}

export default Search;