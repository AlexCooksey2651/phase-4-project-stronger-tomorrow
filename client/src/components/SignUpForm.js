import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Stack from 'react-bootstrap/Stack'
import Alert from 'react-bootstrap/Alert'

function SignUpForm({ onLogin, toggleLoginPage }) {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [passwordConfirmation, setPasswordConfirmation] = useState("")
  const [age, setAge] = useState("")
  const [height, setHeight] = useState("")
  const [bodyweight, setBodyweight] = useState("")
  const [errors, setErrors] = useState([]);

  function handleSubmit(e) {
    e.preventDefault()
    setErrors([])
    fetch('/signup', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        first_name: firstName,
        last_name: lastName,
        email,
        password,
        password_confirmation: passwordConfirmation,
        age,
        height,
        weight: bodyweight,
      })
    })
      .then(r => {
        if (r.ok) {
          r.json().then(user => onLogin(user))
        } else {
          r.json().then(data => setErrors(data.errors))
        }
      })
  }


  return (
    <Container>
      <Form id="signup-form" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label><b>FIRST NAME:</b></Form.Label>
          <Form.Control type="text" placeholder="First name" value={firstName} onChange={e => setFirstName(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label><b>LAST NAME:</b></Form.Label>
          <Form.Control type="text" placeholder="Last name" value={lastName} onChange={e => setLastName(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicAge">
          <Form.Label><b>AGE:</b></Form.Label>
          <Form.Control type="number" min="12" max="99" placeholder="Age" value={age} onChange={e => setAge(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicHeight">
          <Form.Label><b>HEIGHT:</b></Form.Label>
          <Form.Control type="number" min="36" max="96" placeholder="Height (inches)" value={height} onChange={e => setHeight(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicHeight">
          <Form.Label><b>BODYWEIGHT:</b></Form.Label>
          <Form.Control type="number" min="1" max="1000" placeholder="Bodyweight (pounds)" value={bodyweight} onChange={e => setBodyweight(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label><b>EMAIL ADDRESS:</b></Form.Label>
          <Form.Control type="email" placeholder="Email address" value={email} onChange={e => setEmail(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label><b>PASSWORD:</b></Form.Label>
          <Form.Control type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPasswordConfirmation">
          <Form.Label><b>PASSWORD CONFIRMATION:</b></Form.Label>
          <Form.Control type="password" placeholder="Confirm password" value={passwordConfirmation} onChange={e => setPasswordConfirmation(e.target.value)} />
        </Form.Group>

        <Stack gap={2} className="col-md-5 mx-auto">
          <Button variant="light" type="submit">
            Submit
          </Button>
          <Button variant="light" onClick={() => toggleLoginPage()}>
            Login as Current User
          </Button>
        </Stack>

        <br />
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

export default SignUpForm;