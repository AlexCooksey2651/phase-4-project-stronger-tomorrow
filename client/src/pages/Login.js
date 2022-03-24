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
      {showSignup ?<SignUpForm onLogin={onLogin} toggleLoginPage={toggleLoginPage}/> : <LoginForm onLogin={onLogin} toggleLoginPage={toggleLoginPage}/>}
    </div>
  )
}

export default Login;