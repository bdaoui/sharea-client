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

const handleDelete = (d) => {
  service
  .deleteById(d)
  .then(res => console.log(res))
  .then(setTimeout(function(){ window.location.reload(); }, 1000))
  .catch((err) => console.log(err))
}

  return (
    <div className='bg-gray-50'>
      
    <Box> 
      <Masonry className='gap-1 mb-5 bg-gray-50' columns={{sm:1, md:2, lg:3}} spacing={1}>
        {allImages.map((item, index) => (
          <div className='flex flex-col bg-sky-400 rounded p-1 shadow duration-300 shadow-neutral-900 hover:shadow-xl' key={item._id}>
            <img
              src={item.imageUrl}
              alt={item.name}
              loading="lazy"
              // style={{
              //   display: 'block',
              //   width: '100%',
              // }}
              className="rounded-md"
            />
            <a className='rounded-mb font-amita font-black text-gray-50 text-lg' href={`/image/${item._id}`}>{item.name}</a>
            <span className='font-amita font-semibold text-gray-50 text-sm'>{item.tags}</span>
            <svg onClick={() => handleDelete(item._id)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-7 h-7 text-red-600">
            <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
            </svg>

          </div>
        ))}
      </Masonry>
    </Box>



    </div>
    
  )
}

export default Images