import { createContext, useState, useEffect } from "react";

const AuthContext = createContext()
function Context(props) {

  const [user, setUser] = useState(null);
  const [toggle, setToggle] = useState(false)

  const authenticateUser = async () =>{
    const token = await JSON.parse(localStorage.getItem("token"));  
    console.log("this is token ", token)
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
    <AuthContext.Provider value={{user, setUser, toggle, setToggle}}>
      {props.children}
    </AuthContext.Provider>
  )
}
export {Context, AuthContext}