import { useState , useContext, useEffect} from "react";
import { AuthContext } from "../../Context/Context";


function Search({character, setCharacter}) {
  const {images, setImages} = useContext(AuthContext);
  const [filter, setFilter] = useState([])

  // const handleSearch = (e) => {
  //   setCharacter(e.target.value);
  
  // };
  
  // console.log(images)
  // useEffect(() => {
  //   const search = images.map(image => {
  //     image.filter(e =>
  //       console.log(e.tags))  
      
  //   })
  //   setFilter(images)
  // }, [character]);

  return (
    <>
      <label>Search SHAREA</label>
      <input type="text" className="search-bar" value={character} onChange={(e) => setCharacter(e.target.value)}/>
    </>
  );
}

export default Search;