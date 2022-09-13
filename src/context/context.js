import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { baseURL } from "./Appcontext";
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
    // const data = localStorage.getItem("token");
    // const getUser = () => {setUser(data)} 
    // console.log("this is data ", data, "This is user", user)
    // getUser();
    authenticateUser();
  },[]);
  console.log("this is working? ",  user)
//   const authenticateUser = () => {
//     const token = localStorage.getItem('authToken'); // load the value for property with key 'authToken'
//     if(token) {
//         // update a state variable user that will carry the user information throughout the app
//         })
//         .catch(err => console.log(err))
//     }
//     else {
//         setIsLoggedIn(false)
//         setUser(null)
//         setIsLoading(true)
//     }
// }
// [6:07 PM]  useEffect(() => { // each time the app loads, we check if a JWT is valid 
//     authenticateUser();
// }, [])
  return (
    <AuthContext.Provider value={{user, setUser}}>
      {props.children}
    </AuthContext.Provider>
  )
}
export {Context, AuthContext}