import React from 'react'
import Box from '@mui/material/Box';
import Masonry from '@mui/lab/Masonry';

const RandomImages = () => {
  
// async function fetchApi() {
//   let response = await fetch('https://picsum.photos/v2/list');
//   let data = await response.text();
//   data.forEach()
//   console.log(data);
// }
// fetchApi();
const arrayLength = 100;
const randomArray = [];
for(let i = 0; i < arrayLength; i++) {randomArray.push(Math.floor(Math.random() * 1000))}
let output = '';
const handleImageId = function(imageId){
output += `<img src="https://picsum.photos/id/${imageId}/300/300" alt="Lorem Picsum Image">`
}
randomArray.forEach(handleImageId);
console.log(output)

  return (
    <div> 
      
      {/* <Box> 
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
    </Box> */}


    </div>
  )
}

export default RandomImages