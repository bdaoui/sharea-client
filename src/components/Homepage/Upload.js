import React, {useState, useContext} from "react";
import { useNavigate } from "react-router-dom";
import service from "../../Context/AppContext";
import {AuthContext} from '../../Context/Context';


const Upload = () =>  {
  const {user, setUser} = useContext(AuthContext)

  const [name, setName] = useState("");
  const [tags, setTags] = useState([]);

  const navigate = useNavigate();
  // ******** this function submits the form ********
  const handleSubmit = (e) => {
    e.preventDefault();
    const tagsArray = [...tags].join('').split(',')
    console.log(tagsArray)
    const uploadData = new FormData();
    uploadData.append("imageUrl", e.target.image.files[0]);
    uploadData.append("name", name);
    uploadData.append("owner", user._id );
    uploadData.append("tags", JSON.stringify(tagsArray));
    service
      .uploadImage(uploadData)
      .then((response) => {
        console.log(response);
      })
      .then(setTimeout(function(){ window.location.reload(); }, 3000))
      .catch((err) => console.log("Error while uploading the file: ", err));
      
  };

  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden bg-gray-50 font-amita mr-1 rounded">
    <div className="w-full p-6 m-auto bg-sky-400 rounded-md ">
        
        <h1 className="text-3xl text-gray-50 font-amita font-semibold text-center uppercase decoration-wavy">
            Upload to SHH-AREA
        </h1>

        <form className="mt-6" onSubmit={handleSubmit}>

            <div className="mb-2">
                <label for="name" className="block text-base text-gray-50 font-amita font-semibold">
                    NAME
                </label>
                <input type="name" className="block w-full px-4 py-2 mt-2 mb-5 tracking-widest font-amita text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder='Name your upload' onChange={(e) => setName(e.target.value)} value={name}/>
            </div>
            
            <div className="mb-2">
                <label for="image" className="block text-base text-gray-50 font-amita font-semibold">
                  SELECT YOUR IMAGE
                </label>
                <input type="file" name="image" className="block w-full px-4 py-2 mt-2 tracking-widest font-amita text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40 mb-5"/>
            </div>

            <div className="mb-2">
                <label for="tags" className="block text-base text-gray-50 font-amita font-semibold">
                    #TAGS
                </label>
                <textarea type="tags" className="block w-full px-4 py-2 mt-2 mb-5 tracking-widest font-amita text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder='Initiate a tag with #,
                    Use commas to seperate tags' onChange={(e) => setTags(e.target.value)} value={tags}/>
            </div>

            <button className="w-full bg-space px-4 py-2 font-amita text-gray-50 text-lg font-black tracking-widest transition-colors duration-200 transform rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600" type="submit">Upload Image!!!</button>

        </form>
    </div>
</div>
    // <div>
    //   <h2>New Image</h2>
    //   <form onSubmit={handleSubmit}>

    //     <label>Name</label>
    //     <input
    //       type="text"
    //       name="name"
    //       value={name}
    //       onChange={(e) => setName(e.target.value)}
    //     />

    //     <input type="file" name="image" />

    //     <button type="submit">Upload Image</button>
    //   </form>
    // </div>
  );
}

export default Upload;
