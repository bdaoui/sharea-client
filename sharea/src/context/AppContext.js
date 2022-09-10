// src/api/service.js

import axios from "axios";

const service = axios.create({
  // make sure you use PORT = 5005 (the port where our server is running)
  baseURL: "http://localhost:3001/api",
  // withCredentials: true // => you might need this when having the users in the app
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
  console.log("new image in service: ", newImage)

  const {name, imageUrl} = newImage;

  console.log(name, imageUrl)

  return service
    .post("/image", newImage)
    .then((res) => res.data)
    .catch(errorHandler);
};

export default { service, image, uploadImage, createImage};
