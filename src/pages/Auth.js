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
    {check && <SignUpForm check={check}/>}

    <a onClick={signUp}> {check ? "Already part of the family ? Log In" :  "New here? Sign Up to get access"} </a>



    </div>
  ) 
}

export default Auth;