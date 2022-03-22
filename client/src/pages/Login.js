import React, { useState } from 'react'
import LoginForm from "../components/LoginForm"
import SignUpForm from "../components/SignUpForm"
import Header from "../components/Header"

function Login({ onLogin }) {
  const [showSignup, setShowSignup] = useState(false)
  
  
  return (
    <div id="login">
      <Header />
      <LoginForm onLogin={onLogin}/>
      <button onClick={()=>setShowSignup(!showSignup)}>Sign Up</button>
      {showSignup ? <SignUpForm onLogin={onLogin}/> : null}
    </div>
  )
}

export default Login;