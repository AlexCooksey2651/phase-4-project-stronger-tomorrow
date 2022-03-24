import React, { useState } from 'react'
import UserInfo from "../components/UserInfo"
import EditProfileForm from "../components/EditProfileForm"

function Profile({ user }) {
  const { id, first_name, last_name, age, height, weight, email, password } = user
  const [userInfo, setUserInfo] = useState(user)
  const [showEditProfile, setShowEditProfile] = useState(false)
  
  function toggleProfilePage() {
    setShowEditProfile(!showEditProfile)
  }

  function handleUpdateUser(updatedUser) {
    setUserInfo(updatedUser)
  }

  return (
    <>
      {showEditProfile ? <EditProfileForm userInfo={userInfo} toggleProfilePage={toggleProfilePage} handleUpdateUser={handleUpdateUser}/> : <UserInfo userInfo={userInfo} toggleProfilePage={toggleProfilePage}/>}
    </>
  )
}

export default Profile;