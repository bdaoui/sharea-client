import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import Masonry from '@mui/lab/Masonry';

const RandomImages = () => {
const [pics, setPics] = useState([])
const random = Math.floor(Math.random() * 30)

async function fetchApi() {
  let response = await fetch(`https://picsum.photos/v2/list?page=${random}&limit=100%27`);
  let data = await response.json();
  setPics(data);
  console.log(data, 'hello')
}
useEffect(() =>{
  fetchApi();
},[] ) 

  return (
    <div> 
      
      <Box> 
      <Masonry columns={{sm:1, md:2, lg:3}} spacing={1}>
        {pics.map((item, index) => (
          <div key={item.id}>
            <img
              src={item.download_url}
              alt={item.name}
              loading="lazy"
              style={{
                display: 'block',
                width: '100%',
              }}
              className="transition-shadow ease-in-out duration-300 shadow-none hover:shadow-xl"
            />
            <p>{item.author}</p>
            <span className='italic'>Like this image? Click below</span><br></br>
            <a href={item.url} target="_blank">{item.url}</a>
          </div>
        ))}
      </Masonry>
    </Box>


    </div>
  )
}

export default RandomImages