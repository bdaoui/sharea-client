import React, {useState, useEffect} from 'react';
import service from "../../Context/AppContext";
import Box from '@mui/material/Box';
import Masonry from '@mui/lab/Masonry';


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
    <h1>Feed</h1>
  
    <Box> 
      <Masonry columns={{sm:1, md:2, lg:3}} spacing={1}>
        {allImages.map((item, index) => (
          <div key={item._id}>
            <img
              src={item.imageUrl}
              alt={item.name}
              loading="lazy"
              style={{
                display: 'block',
                width: '100%',
              }}
              className="transition-shadow ease-in-out duration-300 shadow-none hover:shadow-xl"
            />
            <p>{item.name}</p>
            <span>{item.tags}</span>
          </div>
        ))}
      </Masonry>
    </Box>

    
    </div>
  )
}

export default Feed