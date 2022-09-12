import React, {useState} from 'react'
import LoginForm from '../components/LoginForm';
import SignUpForm from '../components/SignUpForm';

function Auth() {
  const [check, setCheck] = useState(false)

  const signUp = () => {
    if(check){
      return setCheck(false);
    }

    return setCheck(true);

  }

    
  return (
    <div>
    {!check && <LoginForm />}

    <button onClick={signUp}> {check ? "Log In" :  "Sign Up"} </button>

    {check && <SignUpForm />}


    </div>
  ) 
}

export default Auth;