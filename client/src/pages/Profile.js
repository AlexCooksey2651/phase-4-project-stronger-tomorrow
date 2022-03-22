import React from 'react'

function Profile({ user }) {
  const { id, first_name, last_name, age, height, weight, email, password } = user
  return (
    <div id="profile">
        <h2>First Name: {first_name}</h2>
        <h2>Last Name: {last_name}</h2>
        <h2>Age: {age}</h2>
        <h2>Height: {height} inches</h2>
        <h2>Weight: {weight} pounds</h2>
        <h2>Email Address: {email}</h2>
        <button>Edit Profile Information</button>
    </div>
  )
}

export default Profile