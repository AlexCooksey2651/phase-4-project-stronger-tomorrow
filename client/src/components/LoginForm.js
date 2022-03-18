import React, { useState } from 'react'

function LoginForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  
  function handleSubmit(e) {
    e.preventDefault()
    fetch('/login', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify( 
            { email, password }
        ),
    })
        .then(resp => {
            if (resp.ok) {
                resp.json().then(user)
            } else {
                resp.json().then(err => setErrors(err.errors));
            }
        });
  }

  return (
    <form id="loginForm" onSubmit={handleSubmit}>
        <label for="email">Email Address:
          <input required
            type="text"
            name="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </label>
        <label for="password">Password:
          <input required
            type="password"
            name="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </label>
    </form>
  )
}

export default LoginForm