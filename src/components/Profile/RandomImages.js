import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import Masonry from '@mui/lab/Masonry';
import {Link} from "react-router-dom";


const RandomImages = () => {
const [pics, setPics] = useState([])
const random = Math.floor(Math.random() * 30)

async function fetchApi() {
  let response = await fetch(`https://picsum.photos/v2/list?page=${random}&limit=100%27`);
  let data = await response.json()
  setPics(data);
  console.log(data, 'hello')
}
useEffect(() =>{
  fetchApi();
  // eslint-disable-next-line react-hooks/exhaustive-deps
},[] ) 

  return (
    <div className='bg-gray-50'>
      
      <Box> 
      <Masonry className='gap-1 bg-gray-50' columns={{sm:1, md:2, lg:3}} spacing={1}>
        {pics.map((item, index) => (
          <div className='flex flex-col bg-sky-400 rounded p-1 shadow duration-300 shadow-neutral-900 hover:shadow-xl' key={item.id}>
            <img
              src={item.download_url}
              alt={item.name}
              loading="lazy"
              style={{
                display: 'block',
                width: '100%',
              }}
              className="rounded-md"
            />
            <p className='rounded-md font-amita font-black text-gray-50 text-lg'>This image was posted by: {item.author}</p>
            <span className='font-amita font-semibold text-gray-50 text-sm'>Want this image? Click below</span><br></br>
            <Link to={item.url} className='font-amita font-bold text-gray-50 text-base italic'  target="_blank">{item.url}</Link>
          </div>
        ))}
      </Masonry>
    </Box>


    </div>
  )
}

export default RandomImages