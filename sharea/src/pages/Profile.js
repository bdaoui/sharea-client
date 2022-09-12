import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import the service since we need it to send (and get) the data to(from) the server
import service from "../context/AppContext";

function Profile() {
  const [imageUrl, setImageUrl] = useState("");
  const [name, setName] = useState("");
  
  

  const navigate = useNavigate();

  // ******** this function handles the file upload ********
    const handleFileUpload = (e) => {



  };


  // useEffect( () =>{

  //   if(imageUrl !== "") {

  //     service
  //     .createImage({ name, imageUrl })
  //     .catch((err) => console.log("Error while adding the new image: ", err));
      
  //   }

  //   },[imageUrl, name] )
    





  // ******** this function submits the form ********
  const handleSubmit =  (e) => {
    e.preventDefault();

    
    const uploadData = new FormData();
    uploadData.append("imageUrl", e.target.image.files[0]);
    uploadData.append("name", name);


    service
    .uploadImage(uploadData)
    .then( (response) => {
    console.log(response);
    navigate("/homepage");

    })
    .catch((err) => console.log("Error while uploading the file: ", err));



  }

  return (

    <div>
      <h2>New Image</h2>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input type="file" name="image" />

        <button type="submit">Upload Image</button>
      </form>
    </div>
  );
}

export default Profile;
























// import React, {useState} from 'react';
// import Axios from "axios";

// import RandomFeed from '../components/RandomFeed';
// import SavedFeed from '../components/SavedFeed';
// import OwnFeed from '../components/OwnFeed';





// const Profile = () => {

//     const [imageName, setImageName] = useState( "");
//     const [imageUrl, setImageUrl] = useState("");


//     const [previewImage, setPreviewImage] = useState("");



//     const handleUpload = (e) =>{

//         const uploadData = new FormData();
//         uploadData.append("imageUrl", e.target.files[0]);

//     }




//     const handleSubmit = (e) =>{
//         e.preventDefault();


//         Axios.post("http://localhost:3001/api/image", uploadData )
//         .then(response => console.log(response))
//         .catch(err => console.log(err));





//     }


//   return (
//     <div>
//         <RandomFeed />
//         <SavedFeed />
//         <OwnFeed />

//         <form onSubmit={handleSubmit} encType="multipart/form-data">
//             <input type="text" value={imageName} name="name" onChange={(e) =>{ setImageName(e.target.value)}} />
//             <input type="file" name="image" value={imageUrl} onChange={(e) => handleUpload(e)} />
//             <button type='submit'>Upload</button>
//         </form>




//     </div>
//   )
// }

// export default Profile


