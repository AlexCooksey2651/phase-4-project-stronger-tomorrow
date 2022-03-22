import React, { useState } from 'react'
import LoginForm from "../components/LoginForm"
import SignUpForm from "../components/SignUpForm"

function Login({ onLogin }) {
  const [showSignup, setShowSignup] = useState(false)
  
  
  return (
    <div id="login_page">
      <LoginForm onLogin={onLogin}/>
      <button onClick={()=>setShowSignup(!showSignup)}>Sign Up</button>
      {showSignup ? <SignUpForm onLogin={onLogin}/> : null}
    </div>
  )
}

export default Login;