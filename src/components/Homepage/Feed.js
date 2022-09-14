import React, {useState, useEffect} from 'react';
import service from "../../Context/AppContext";


const Feed = () => {
    const [allImages, setAllImages] = useState([]);
    const PHOTOS = [
      {
        imageUrl:
          "https://images.pexels.com/photos/1076240/pexels-photo-1076240.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      },
      {
        imageUrl:
          "https://images.pexels.com/photos/757444/pexels-photo-757444.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      },
      {
        imageUrl:
          "https://images.pexels.com/photos/2516406/pexels-photo-2516406.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      },
      {
        imageUrl:
          "https://images.pexels.com/photos/2413238/pexels-photo-2413238.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      },
      {
        imageUrl:
          "https://images.pexels.com/photos/1714455/pexels-photo-1714455.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      },
      {
        imageUrl:
          "https://images.pexels.com/photos/2407265/pexels-photo-2407265.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      },
      {
        imageUrl:
          "https://images.pexels.com/photos/3698534/pexels-photo-3698534.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      },
      {
        imageUrl:
          "https://images.pexels.com/photos/2467670/pexels-photo-2467670.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      },
      {
        imageUrl:
          "https://images.pexels.com/photos/2623690/pexels-photo-2623690.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      },
      {
        imageUrl:
          "https://images.pexels.com/photos/3047993/pexels-photo-3047993.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      },
      {
        imageUrl:
          "https://images.pexels.com/photos/239546/pexels-photo-239546.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      },
      {
        imageUrl:
          "https://images.pexels.com/photos/4496891/pexels-photo-4496891.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      },
      {
        imageUrl:
          "https://images.pexels.com/photos/8979525/pexels-photo-8979525.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      },
    ];

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
      PHOTOS.map( (image) => {
        
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