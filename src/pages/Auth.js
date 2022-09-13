import React, {useState} from 'react'
import Login from '../components/Auth/Login';
import Signup from '../components/Auth/Signup';

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
    {!check && <Login/>}
    {check && <Signup signUp={signUp}/>}

    <a onClick={signUp}> {check ? "Already part of the family ? Log In" :  "New here? Sign Up to get access"} </a>



    </div>
  ) 
}

export default Auth;