// src/api/service.js
import axios from "axios";


const baseURL = "http://localhost:3001/api"

const service = axios.create({
  baseURL
});

const errorHandler = (err) => {
  throw err;
};

const image = () => {
  return service
    .get("/image")
    .then((res) => res.data)
    .catch(errorHandler);
};

const uploadImage = (file) => {
  return service
    .post("/upload", file)
    .then((res) => res.data)
    .catch(errorHandler);
};

const createImage = (newImage) => {
  // console.log("new image in service: ", newImage)
  return service
    .post("/image", newImage)
    .then((res) => res.data)
    .catch(errorHandler);
};

const handleLogout = () => {
  return service
    .post('/logout')
    .then( localStorage.removeItem("token") )
    .catch(errorHandler)
}

export default { baseURL, service, image, uploadImage, createImage, handleLogout};
