import React, {useContext} from 'react'
import Info from '../Components/Profile/Info'
import InfoCard from '../Components/Profile/InfoCard'
import RandomImages from '../Components/Profile/RandomImages'
import Images from '../Components/Profile/Images'
import {AuthContext} from '../Context/Context';

const Profile = () => {
  const {toggle, setToggle} = useContext(AuthContext);

  return (
    <div>
      {toggle && <Info /> 
      }
      {!toggle && <InfoCard /> }
      {toggle && <Images />
      }
      {!toggle && <RandomImages />
      }


    </div>
  )
}

export default Profile