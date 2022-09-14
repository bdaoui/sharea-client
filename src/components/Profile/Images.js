import React, {useState, useContext, useEffect} from 'react';
import service from "../../Context/AppContext";
import {AuthContext} from '../../Context/Context';

const Images = () => {
  const {user, setUser} = useContext(AuthContext);
  const [allImages, setAllImages] = useState([]);

  useEffect(() =>{
    service
    .imageById(user._id)
    .then(allImages =>{
      setAllImages(allImages);
      console.log("this are all my images ", allImages);

    })
    .catch(err => console.log(err));

},[] ) 


  return (
    <div className='flex flex-col'> 
    


      <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

    </div>
    
    </div>  )
}

export default Images