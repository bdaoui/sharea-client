import React from 'react'


function Auth() {
  
  if(req.currentUser){
    console.log(req.currentUser, 'hello world')
  }
  return (
    <div>
        Auth
    </div>
  )
}

export default Auth