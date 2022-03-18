import React, { useState } from 'react'

function SignUpForm() {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [passwordConfirmation, setPasswordConfirmation] = useState("")
  const [age, setAge] = useState("")
  const [height, setHeight] = useState("")
  const [bodyweight, setBodyweight] = useState("")
  // const [sex, setSex] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
  }


  return (
    <div className="newUser">
      <form id="signupForm" onSubmit={handleSubmit}>
        <label for="first_name">First Name:
          <input required
            type="text"
            name="first_name"
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
          />
        </label>
        <label for="last_name">Last Name:
          <input required
            type="text"
            name="last_name"
            value={lastName}
            onChange={e => setLastName(e.target.value)}
          />
        </label>
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
        <label for="password_confirmation">Confirm Password:
          <input required
            type="password"
            name="password"
            value={passwordConfirmation}
            onChange={e => setPasswordConfirmation(e.target.value)}
          />
        </label>
        <label for="age">Age:
          <input required
            type="number"
            name="age"
            value={age}
            onChange={e => setAge(e.target.value)}
          />
        </label>
        <label for="height">Height:
          <input required
            type="number"
            name="height"
            value={height}
            onChange={e => setHeight(e.target.value)}
          /> inches
        </label>
        <label for="weight">Weight:
          <input required
            type="text"
            name="bodyweight"
            value={bodyweight}
            onChange={e => setBodyweight(e.target.value)}
          /> pounds
        </label>
      </form>
    </div>
  )
}

export default SignUpForm;