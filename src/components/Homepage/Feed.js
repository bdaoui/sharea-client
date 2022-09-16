import React, {useState, useEffect, useContext} from 'react';
import service from "../../Context/AppContext";
import Box from '@mui/material/Box';
import Masonry from '@mui/lab/Masonry';
import { AuthContext } from '../../Context/Context';

const Feed = ({allImages, setAllImages, character}) => {
const [searching, setSearching]= useState(allImages)
const {user, setUser} = useContext(AuthContext)
console.log(user)

useEffect(() =>{
  service
      .image()
      .then(allImages =>{
        setAllImages(allImages);
        setSearching(allImages);
      })
      .catch(err => console.log(err));
}, [])

useEffect (() => {
    const filterName = allImages.filter(picture => { 
      return picture.name.toLowerCase().includes(character.toLowerCase())});

      let filterTags = [];
      for(let i = 0; i < allImages.length; i++){
        for(let j=0; j < allImages[i].tags.length; j++){
          if (allImages[i].tags[j].includes(character)){
            filterTags.push(allImages[i])
          }
        }
      }
      let doubles = [...filterTags, ...filterName]
      let uniqueChars = doubles.filter((element, index) => {
        return doubles.indexOf(element) === index;
    });
    setSearching((uniqueChars))
} ,[character])

  return (
    <div className='bg-gray-50'>
    <Box> 
      <Masonry className='gap-1 bg-gray-50' columns={{sm:1, md:2, lg:3}} spacing={1}>
        {searching && 
        searching.map((item, index) => {
          return (
          <div className='flex flex-col bg-sky-400 rounded p-1 shadow duration-300 shadow-neutral-900 hover:shadow-xl' key={item._id}>
            <img
              src={item.imageUrl}
              alt={item.name}
              loading="lazy"
              style={{
                display: 'block',
                width: '100%',
              }}
              className="rounded-md"
            />
            <a className='rounded-md font-amita font-black text-gray-50 text-lg' href={`/image/${item._id}`}>{item.name}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 inline ml-3">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg>
            </a>
            <span className='font-amita font-semibold text-gray-50 text-sm'>{item.tags}</span>
            <span className='font-amita font-bold text-gray-50 text-sm'>This image was posted by: {item?.owner?.username}</span>
          {/* get profile by id */}
          </div>
        )})}
      </Masonry>
    </Box>

    </div>
  )
}

export default Feed;