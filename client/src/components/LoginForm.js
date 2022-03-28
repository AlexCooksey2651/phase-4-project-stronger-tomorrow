import React, { useState } from 'react'
import { useHistory } from "react-router-dom"
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Stack from 'react-bootstrap/Stack'

function LoginForm({ onLogin, toggleLoginPage }) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  // const history = useHistory()

  function handleSubmit(e) {
    e.preventDefault()
    setIsLoading(true);
    fetch('/login', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(
        {
          email,
          password
        }
      ),
    })
      .then(r => {
        setIsLoading(false)
        if (r.ok) {
          r.json().then(user => {
            onLogin(user)
            // history.push('/dashboard')
          })
        } else {
          r.json().then(err => setErrors(err.errors));
        }
      });
  }

  return (
    <Container>
      <Form id="login-form" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label><b>EMAIL ADDRESS:</b></Form.Label>
          <Form.Control type="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.target.value)}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label><b>PASSWORD:</b></Form.Label>
          <Form.Control type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}/>
        </Form.Group>

        <Stack gap={2} className="col-md-5 mx-auto">
          <Button variant="light" type="submit">
            Login
          </Button>
          <Button variant="light" onClick={() => toggleLoginPage()}>
            Sign Up as New User
          </Button>
        </Stack>
      </Form>
    </Container>
    // <form id="login-form" onSubmit={handleSubmit}>
    //     <label for="email">Email Address:
    //       <input required
    //         type="text"
    //         name="email"
    //         value={email}
    //         onChange={e => setEmail(e.target.value)}
    //       />
    //     </label>
    //     <label for="password">Password:
    //       <input required
    //         type="password"
    //         name="password"
    //         value={password}
    //         onChange={e => setPassword(e.target.value)}
    //       />
    //     </label>
    //     <button type="submit">Login</button>
    // </form>
  )
}

export default LoginForm;