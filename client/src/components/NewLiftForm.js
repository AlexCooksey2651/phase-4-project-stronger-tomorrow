import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Alert from 'react-bootstrap/Alert'


function NewLiftForm() {
  const [lift, setLift] = useState("")
  const [date, setDate] = useState("")
  const [reps, setReps] = useState("")
  const [weight, setWeight] = useState("")
  const [lifts, setLifts] = useState([])
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);


  useEffect(() => {
    fetch('/lifts')
      .then(r => r.json())
      .then(lifts => setLifts(lifts))
  }, [])

  function handleSubmit(e) {
    e.preventDefault()
    setIsLoading(true)
    fetch('/lift_sessions', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        lift_id: lift,
        date,
        repetitions: reps,
        weight,
      })
    })
      .then(r => {
        setIsLoading(false)
        if (r.ok) {
          r.json().then(data => console.log(data))
          setErrors([])
          setLift("")
          setDate("")
          setReps("")
          setWeight("")
        } else {
          r.json().then(data => setErrors(data.errors));
        }
      })
    
  }

  const current = new Date();
  const formDate = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`

  const liftOptions = lifts.map(lift => {
    return <option key={lift.id} value={lift.id}>{lift.name}</option>
  })

  return (
    <Container>
      <Form id="new-lift-form" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicSelect">
          <Form.Label><b>SELECT LIFT:</b></Form.Label>
          <Form.Select aria-label="Default select example" value={lift} onChange={e => setLift(e.target.value)}>
            <option value="" disabled selected>Lift</option>
            {liftOptions}
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicInput">
          <Form.Label><b>DATE:</b></Form.Label>
          <Form.Control type="date" max={formDate} placeholder="Select Date" value={date} onChange={e => setDate(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicInput">
          <Form.Label><b>REPETITIONS:</b></Form.Label>
          <Form.Control type="number" min="1" max="20" placeholder="Number of Reps" value={reps} onChange={e => setReps(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicInput">
          <Form.Label><b>WEIGHT USED:</b><br /><em>Note: For pullups, include current bodyweight</em></Form.Label>
          <Form.Control type="number" placeholder="Weight Used in Pounds" min="0" step="5" max="1000" value={weight} onChange={e => setWeight(e.target.value)} />
        </Form.Group>

        <Button variant="light" type="submit">
          Submit
        </Button>

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
    </Container >
  )
}

export default NewLiftForm;