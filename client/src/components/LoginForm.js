import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'

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
        {
          email,
          password
        }
      ),
    })
      .then(r => {
        setIsLoading(false)
        if (r.ok) {
          r.json().then(user => onLogin(user))
        } else {
          r.json().then(err => setErrors(err.errors));
        }
      });
  }

  return (
    <Container>
      <Form id="login-form" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.target.value)}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Login
        </Button>
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