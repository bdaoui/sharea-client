// src/api/service.js
import axios from "axios";


const baseURL = "https://smoggy-yak-top-hat.cyclic.app /api"

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

const imagesByOwner = (id) =>{
  return service 
    .get(`/image/${id}/owner`)
    .then(res => res.data)
    .catch(err => console.log(err))
}

const imageById = (id) =>{
  return service 
    .get(`/image/${id}`)
    .then(res => res.data)
    .catch(err => console.log(err))
}

const commentById = (id, comment, owner) =>{
  return service 
    .post(`/image/${id}/comment`, {comment, owner})
    .then(res => res.data)
    .catch(err => console.log(err))
}

const deleteById = (id) =>{
  return service 
    .post(`/image/${id}/delete`)
    .then(res => res.data)
    .catch(err => console.log(err))
}

const deleteCommentById = (id) =>{
  return service 
    .post(`/comment/${id}/delete`)
    .then(res => res.data)
    .catch(err => console.log(err))
}

// const getProfileById = (id) =>{
//   return service 
//     .get(`/profile/${id}`)
//     .then(res => res.data)
//     .catch(err => console.log(err))
// }

export default { baseURL, service, image, uploadImage, createImage, handleLogout, imagesByOwner, imageById, commentById, deleteById, deleteCommentById};
