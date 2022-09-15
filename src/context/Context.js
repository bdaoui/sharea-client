import { createContext, useState, useEffect } from "react";

const AuthContext = createContext()
function Context(props) {

  const [user, setUser] = useState(null);
  const [toggle, setToggle] = useState(false)
  const [images, setImages] = useState([])




  const authenticateUser = async () =>{
    const token = await JSON.parse(localStorage.getItem("token"));  
    if(token){
      await setUser(token)
    }
    else{
      console.log("not working")
    }
  }
  
  useEffect(() => { 
    authenticateUser();
  },[]);

  return (
    <AuthContext.Provider value={{user, setUser, toggle, setToggle, images, setImages}}>
      {props.children}
    </AuthContext.Provider>
  )
}
export {Context, AuthContext}