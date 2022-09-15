import React, {useState, useEffect, useContext} from 'react'
import {useParams} from 'react-router-dom';
import service from '../Context/AppContext';
import {AuthContext} from '../Context/Context';

const ImageId = () => {
const [image, setImage] = useState({});
const {id} = useParams();
const [comment, setComment] = useState('');
const {user, setUser} = useContext(AuthContext);
const {images, setImages} = useContext(AuthContext)


useEffect(() => {
  service
  .imageById(id)
  .then(image =>  {
    console.log(image)
    return setImage(image)})
  .catch(err => console.log(err));
}, []) 

const handleSubmit = (e) => {
  e.preventDefault();
  const owner = user._id;
  const uploadData = new FormData();
  uploadData.append("comment", comment);
  uploadData.append("owner", owner)
  
  service
    .commentById(id, comment, owner)
    .then((response) => {setImage(response);})
    .catch((err) => console.log("Error while uploading the file: ", err));
};

// console.log('hello', image.owner.username, 'comment', image.comments)

  return (
    <div>


{ user &&
    <>
     <img src={image.imageUrl} alt={image.name} />
      <h3>{image.name}</h3>
      <h5>{image.tags}</h5>
      <h6>Image posted by: {image?.owner?.username}</h6> 
      {image?.comments?.map(comment => <h6 key={comment?._id}>{comment?.comment}</h6> )}  
</>    
}
   


    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
    <div className="w-full p-6 m-auto bg-white rounded-md  lg:max-w-xl">
        
        <h1 className="text-3xl font-semibold text-center text-gray-700 uppercase decoration-wavy">
            Add your comment
        </h1>

        <form className="mt-6" onSubmit={handleSubmit}>

            <div className="mb-2">
                <label for="comment" className="block text-lg font-semibold text-gray-800">
                    Comment goes here
                </label>
                <input type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40 mb-5"
                    placeholder='Comment on this pic' onChange={(e) => setComment(e.target.value)} value={comment}/>
            </div>
            
            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600 mt-5" type="submit">Upload Image!!!</button>

        </form>
    </div>
</div>
    </div>
  )
}

export default ImageId