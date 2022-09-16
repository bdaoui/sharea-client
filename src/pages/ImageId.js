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
    <div className='h-screen flex bg-gradient-to-r from-sky-400 via-gray-50 to-sky-400 mt-0'>
      
<div className="h-screen overflow-hidden w-48 flex -sky-400 ">
    <div className="w-full p-6 m-auto -sky-400 rounded-md align-middle justify-center">       
        <h1 className="text-3xl text-gray-50 font-amita font-semibold text-center uppercase decoration-wavy">
            Add your comment
        </h1>
        <form className="mt-6" onSubmit={handleSubmit}>
            <div className="mb-2">
                <label for="comment" className="block text-base text-gray-50 font-amita font-semibold">
                    Comment goes here: 
                </label>
                <textarea type="text" className="block w-full h-60 px-4 py-2 mt-2 mb-5 tracking-widest font-amita text-gray-700 -white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder='Now that is magic' onChange={(e) => setComment(e.target.value)} value={comment}/>
            </div>           
            <button className="w-full bg-space px-4 py-2 font-amita text-gray-50 text-lg font-black tracking-widest transition-colors duration-200 transform rounded-md hover:-gray-600 focus:outline-none focus:-gray-600" type="submit">Comment!!!</button>
        </form>
    </div>
</div>

{ user &&
    <>
    <div className=' -gradient-to-r from-sky-400 via-gray-50 to-sky-400 rounded-md w-4/6 flex'>
     <img className='flex justify-center align-middle object-center object-contain rounded-2xl' src={image?.imageUrl} alt={image?.name}/>
    </div>


<div className='flex-1 flex overflow-hidden'>
<div className='flex-1 overflow-y-scroll -sky-400' >
       <div className='pb-10'>
      <h3 className='font-amita font-black text-gray-50 text-3xl pt-5'>{image?.name}</h3>
      <h5 className='font-amita font-black -sky-400 text-gray-50 text-lg p-1'>{image?.tags}</h5>
      <h6 className='font-amita font-black text-gray-50 text-lg p-5'>Image posted by: {image?.owner?.username}</h6> 
      </div>
      

      <div className='-sky-400 fill-sky-400'>
        <h1 className='text-gray-50 font-black text-3xl tracking-widest'>Comments: </h1>
      {image?.comments?.map(comment => 
      
      
      <h3 className='rounded-md font-amita font-black text-gray-50 text-base pt-10' key={comment?._id}>
        <span>{comment?.owner?.username} posted: </span> {comment?.comment}
        <svg onClick={() => handleCommentDelete(comment._id)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 inline ml-10">
      <path stroke-linecap="round" stroke-linejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
        
        </h3>)}
        </div>
     </div> 
  </div>
</>    
}
   
    </div>
  )
}

export default ImageId