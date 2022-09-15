import React, {useState, useEffect, useContext} from 'react';
import service from "../../Context/AppContext";
import Box from '@mui/material/Box';
import Masonry from '@mui/lab/Masonry';

const Feed = ({allImages, setAllImages, character}) => {
const [searching, setSearching]= useState(allImages)

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
    <div>
    <h1>Feed</h1>
  
    <Box> 
      <Masonry columns={{sm:1, md:2, lg:3}} spacing={1}>
        {searching && 
        searching.map((item, index) => {
          return (
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
        )})}
      </Masonry>
    </Box>

    </div>
  )
}

export default Feed;