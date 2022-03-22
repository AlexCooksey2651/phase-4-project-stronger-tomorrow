import React, { useState, useEffect } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import LiftCard from './LiftCard'

function NewLiftForm() {
  const [lift, setLift] = useState("")
  const [date, setDate] = useState("")
  const [reps, setReps] = useState("")
  const [weight, setWeight] = useState("")
  const [lifts, setLifts] = useState([])

  useEffect(() => {
    fetch('/lifts')
    .then(r => r.json())
    .then(lifts => setLifts(lifts))
  }, [])

  function handleSubmit(e) {
    e.preventDefault()
    fetch('/lift_sessions', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(
        {
          lift,
          date,
          reps,
          weight
        }
      )
    })
  }

  const liftOptions = lifts.map(lift => {
    return <option key={lift.id} value={lift.name}>{lift.name}</option>
  })
  return (
    <Container>
      <Form id="new-lift-form" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicSelect">
          <Form.Label>Choose Lift:</Form.Label>
          <Form.Select aria-label="Default select example" value={lift} onChange={e => setLift(e.target.value)}>
            {liftOptions}
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicInput">
          <Form.Label>Date:</Form.Label>
          <Form.Control type="date" placeholder="Select Date" value={date} onChange={e => setDate(e.target.value)}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicInput">
          <Form.Label>Repetitions:</Form.Label>
          <Form.Control type="number" placeholder="Number of Reps" value={reps} onChange={e => setReps(e.target.value)}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicInput">
          <Form.Label>Weight Used:</Form.Label>
          <Form.Control type="number" placeholder="Weight Used in Pounds" value={weight} onChange={e => setWeight(e.target.value)}/>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container >
    // <form id="new-lift-form" onSubmit={handleSubmit}>
    //     <label for="lift">Lift:
    //       <select required name="lift" onChange={e => setLift(e.target.value)}>
    //           <option value="Flat Barbell Bench Press">Flat Barbell Bench Press</option>
    //           <option value="Barbell Overhead Press">Barbell Overhead Press</option>
    //           <option value="Back Squat">Back Squat</option>
    //           <option value="Barbell Deadlift">Barbell Deadlift</option>
    //           <option value="Pullup">Pullup</option>
    //       </select>
    //       <input required
    //         type="text"
    //         name="lift"
    //         value={lift}
    //         onChange={e => setLift(e.target.value)}
    //       />
    //     </label>
    //     <label for="date">Date:
    //       <input required
    //         type="date"
    //         name="date"
    //         value={date}
    //         onChange={e => setDate(e.target.value)}
    //       />
    //     </label>
    //     <label for="repetitions">Repetitions:
    //       <input required
    //         type="number"
    //         name="repetitions"
    //         value={reps}
    //         onChange={e => setReps(e.target.value)}
    //       />
    //     </label>
    //     <label for="weight_used">Weight Used:
    //       <input required
    //         type="number"
    //         name="weight"
    //         value={weight}
    //         onChange={e => setWeight(e.target.value)}
    //       />
    //       pounds
    //     </label>
    //     <button type="submit">Submit</button>
    // </form>
  )
}

export default NewLiftForm;