import React , {useState, useEffect, useContext} from 'react';
import axios from 'axios';
import {AuthContext} from '../../Context/Context';


const ProfileInfo = () => {
const [userInfo, setUserInfo] = useState(null);
const {user, setUser} = useContext(AuthContext)
const id = user._id;

const getUser = () => {
    axios
    .get(`https://smoggy-yak-top-hat.cyclic.app/api/user/${id}`)
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
<h3 className='bg-sky-400 rounded-md font-amita text-lg font-bold text-gray-50 tracking-widest'>I am from: {userInfo?.location}</h3>
<h3 className='bg-sky-400 rounded-md font-amita text-lg font-bold text-gray-50 tracking-widest'>My occupation is: {userInfo?.occupation}</h3>
<h3 className='bg-sky-400 rounded-md font-amita text-lg font-bold text-gray-50 tracking-widest'>More information: {userInfo?.info}</h3>
    </div>

  )
}

export default ProfileInfo