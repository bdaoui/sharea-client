import React, {useContext} from 'react'
import {AuthContext} from '../../Context/Context'


const Info = () => {
const {user, setUser} = useContext(AuthContext)

  return (
    <div>
      <h3>Hello {user.currentUser.username} </h3>
      <span>Welcome to your profile page</span>


    </div>
  )
}

export default Info