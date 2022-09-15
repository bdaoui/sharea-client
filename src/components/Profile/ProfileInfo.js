import React , {useState, useEffect, useContext} from 'react';
import axios from 'axios';
import {AuthContext} from '../../Context/Context';


const ProfileInfo = () => {
const [userInfo, setUserInfo] = useState(null);
const {user, setUser} = useContext(AuthContext)
const id = user._id;

const getUser = () => {
    axios
    .get(`http://localhost:3001/api/user/${id}`)
    .then(response => { 
        return setUserInfo(response.data)})
    .catch((err) => console.log(err))  

}
console.log(userInfo)
useEffect(() => {
getUser()
}, [])


  return (
    <div>
<h3>{userInfo?.location}</h3>
<h3>{userInfo?.occupation}</h3>
<h3>{userInfo?.info}</h3>
    </div>

  )
}

export default ProfileInfo