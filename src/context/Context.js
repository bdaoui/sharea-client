import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { baseURL } from "./AppContext";

const AuthContext = createContext()

function Context(props) {
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    const getUser = axios
        .get("http://localhost:3001/api/auth")
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err))
  }, []);
  // const authenticateUser = async () => {
  //   try {
  //     await axios.get(`${baseURL}/api/user`, {
  //     withCredentials: true,
  //   });
     
  //   } catch (err) {
  //     console.log("There was an error getting your events", err);
  //     setError(err.data);
  //     setFetchingUser(false);
  //   }
  // };

  return (

    <AuthContext.Provider value={{user, setUser}}>
      {props.children}
    </AuthContext.Provider>
  )
}

export {Context, AuthContext}