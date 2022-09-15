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
    .then((response) => {setImage(response)})
    .then(setTimeout(function(){ window.location.reload(); }, 1000))
    .catch((err) => console.log("Error while uploading the file: ", err));
};

const handleCommentDelete = (d) => {
  service
  .deleteCommentById(d)
  .then(res => console.log(res))
  .then(setTimeout(function(){ window.location.reload(); }, 1000))
  .catch((err) => console.log(err))
}

// console.log('hello', image.owner.username, 'comment', image.comments)

  return (
    <div>


{ user &&
    <>
     <img src={image?.imageUrl} alt={image?.name} />
      <h3>{image?.name}</h3>
      <h5>{image?.tags}</h5>
      <h6>Image posted by: {image?.owner?.username}</h6> 
      {image?.comments?.map(comment => <h3 key={comment?._id}>
        
        {comment?.comment}
        <svg onClick={() => handleCommentDelete(comment._id)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
        
        </h3>)}
      
  
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
            
            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600 mt-5" type="submit">Comment!!!</button>

        </form>
    </div>
</div>
    </div>
  )
}

export default ImageId