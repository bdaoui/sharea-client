import { createContext, useState, useEffect } from "react";

const AuthContext = createContext()
function Context(props) {
  const [user, setUser] = useState(null);
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
  console.log("this is working? ",  user)

  return (
    <AuthContext.Provider value={{user, setUser}}>
      {props.children}
    </AuthContext.Provider>
  )
}
export {Context, AuthContext}