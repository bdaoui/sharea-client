import React, {useState, useEffect} from 'react';
import service from "../../context/AppContext";


const Feed = () => {
    const [allImages, setAllImages] = useState([]);

    useEffect(() =>{
        service
            .image()
            .then(allImages =>{
              setAllImages(allImages);
            })
            .catch(err => console.log(err));
        
  }, [])
  
  return (
    <div>
    
    <h1>
      Feed
    </h1>
    {
      allImages.map( (image) => {
        
        return <div key={image._id} >
          <h3>{image.name}</h3> 
          <img src={image.imageUrl} alt={image.name} style={{height: "300px", width: "400px"}} />
        </div>
      }
    )}
    
    
    </div>
  )
}

export default Feed