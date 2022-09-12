import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import the service since we need it to send (and get) the data to(from) the server
import service from "../context/AppContext";

function Profile() {
  const [name, setName] = useState("");
  const navigate = useNavigate();

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