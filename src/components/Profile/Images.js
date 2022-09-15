import React, {useState, useContext, useEffect} from 'react';
import service from "../../Context/AppContext";
import {AuthContext} from '../../Context/Context';
import Box from '@mui/material/Box';
import Masonry from '@mui/lab/Masonry';

const Images = () => {
  const {user, setUser} = useContext(AuthContext);
  const [allImages, setAllImages] = useState([]);
  const id = user._id;

  useEffect(() =>{
    service
      .imagesByOwner(id)
      .then(allImages =>{setAllImages(allImages)})
      .catch(err => console.log(err));
},[] ) 


  return (
    <div>
      <h1>Your images</h1>
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
            <a href={`/image/${item._id}`}>{item.name}</a>
            <span>{item.tags}</span>
          </div>
        ))}
      </Masonry>
    </Box>



    </div>
    
  )
}

export default Images