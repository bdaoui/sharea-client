import React , {useState, useEffect} from 'react';
import axios from 'axios';

const ProfileInfo = () => {
const [userInfo, setUserInfo] = useState({});


// useEffect(() => {
// const token = JSON.parse(localStorage.getItem("token"))
// setUserInfo(token);
// }, [])
// //when update refresh token
// console.log(userInfo, 'hehheheheh')


  return (
    <div>
<h3>{userInfo?.location}</h3>
<h3>{userInfo?.occupation}</h3>
<h3>{userInfo?.info}</h3>
    </div>
  )
}

export default ProfileInfo