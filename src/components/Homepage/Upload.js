import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import service from "../../Context/AppContext";


const Upload = () =>  {
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
    uploadData.append("tags", JSON.stringify(tagsArray));
    service
      .uploadImage(uploadData)
      .then((response) => {
        console.log(response);
      })
      .then(navigate('/homepage'))
      .catch((err) => console.log("Error while uploading the file: ", err));
  };

  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
    <div className="w-full p-6 m-auto bg-white rounded-md  lg:max-w-xl">
        
        <h1 className="text-3xl font-semibold text-center text-gray-700 uppercase decoration-wavy">
            Upload to SHAREA
        </h1>

        <form className="mt-6" onSubmit={handleSubmit}>

            <div className="mb-2">
                <label for="name" className="block text-lg font-semibold text-gray-800">
                    Name
                </label>
                <input type="name" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40 mb-5"
                    placeholder='Name your upload' onChange={(e) => setName(e.target.value)} value={name}/>
            </div>
            
            <div className="mb-2">
                <label for="image" className="block text-lg font-semibold text-gray-800">
                  Select an image
                </label>
                <input type="file" name="image" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40 mb-5"/>
            </div>

            <div className="mb-2">
                <label for="tags" className="block text-lg font-semibold text-gray-800">
                    Tags
                </label>
                <textarea type="tags" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40 mb-5"
                    placeholder='Initiate a tag with #,
                    Use commas to seperate tags' onChange={(e) => setTags(e.target.value)} value={tags}/>
            </div>

            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600 mt-5" type="submit">Upload Image!!!</button>

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
