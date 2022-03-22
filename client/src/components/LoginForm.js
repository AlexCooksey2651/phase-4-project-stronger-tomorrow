import React, { useState } from 'react'

function LoginForm({ onLogin }) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  
  function handleSubmit(e) {
    e.preventDefault()
    setIsLoading(true);
    fetch('/login', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify( 
            { email, 
              password
            }
        ),
    })
        .then(resp => {
            setIsLoading(false)
            if (r.ok) {
                r.json().then(user => onLogin(user))
            } else {
                r.json().then(err => setErrors(err.errors));
            }
        });
  }

  return (
    <form id="login-form" onSubmit={handleSubmit}>
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
        <button type="submit">Login</button>
    </form>
  )
}

export default LoginForm;