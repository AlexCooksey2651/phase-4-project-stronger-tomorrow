import React, { useState } from 'react'
import { useHistory } from "react-router-dom"
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Stack from 'react-bootstrap/Stack'
import Alert from 'react-bootstrap/Alert'

function LoginForm({ onLogin, toggleLoginPage }) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errors, setErrors] = useState([]);
  const history = useHistory()

  function handleSubmit(e) {
    e.preventDefault()
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
        if (r.ok) {
          r.json().then(user => {
            onLogin(user)
            history.push('/dashboard')
          })
        } else {
          r.json().then(data => setErrors(data.errors));
        }
      });
  }

  return (
    <Container>
      <Form id="login-form" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label><b>EMAIL ADDRESS:</b></Form.Label>
          <Form.Control type="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label><b>PASSWORD:</b></Form.Label>
          <Form.Control type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
        </Form.Group>

        <Stack gap={2} className="col-md-5 mx-auto">
          <Button variant="light" type="submit">
            Login
          </Button>
          <Button variant="light" onClick={() => toggleLoginPage()}>
            Sign Up as New User
          </Button>
        </Stack>
        <br/> 
        {errors ? <Form.Group>
          {errors.map(error => {
            return (
              <Alert key={error}>
                {error}
              </Alert>
            )
          })}
        </Form.Group> : null}
      </Form>
    </Container>
  )
}

export default LoginForm;