import React, { useState } from 'react'
import LoginForm from "../components/LoginForm"
import SignUpForm from "../components/SignUpForm"
import Header from "../components/Header"

function Login({ onLogin }) {
  const [showSignup, setShowSignup] = useState(false)
  
  function toggleLoginPage() {
    setShowSignup(!showSignup)
  }

  return (
    <div id="login">
      <Header />
      {showSignup ? null : <LoginForm onLogin={onLogin} toggleLoginPage={toggleLoginPage}/>}
      {/* <button onClick={()=>setShowSignup(!showSignup)}>Sign Up</button> */}
      {showSignup ? <SignUpForm onLogin={onLogin} toggleLoginPage={toggleLoginPage}/> : null}
    </div>
  )
}

export default Login;