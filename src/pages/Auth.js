import React, {useState} from 'react'
import Login from '../Components/Auth/Login';
import Signup from '../Components/Auth/Signup';

function Auth() {
  const [check, setCheck] = useState(true)

  const signUp = () => {
    console.log(check)
    if(check){
      return setCheck(false);
    }

    return setCheck(true);

  }

  return (
    <div>

      <div>{!check && <Login/>}</div>
    <div>{check && <Signup signUp={signUp}/>}</div>
    

    <a onClick={signUp}> {check ? "Already part of the family ? Log In" :  "New here? Sign Up to get access"} </a>



    </div>
  ) 
}

export default Auth;