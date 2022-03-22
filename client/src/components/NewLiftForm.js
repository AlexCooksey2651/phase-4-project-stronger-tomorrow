import React, { useState } from 'react'

function NewLiftForm() {
  const [lift, setLift] = useState("")
  const [date, setDate] = useState("")
  const [reps, setReps] = useState("")
  const [weight, setWeight] = useState("")

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

  return (
    <form id="new-lift-form" onSubmit={handleSubmit}>
        <label for="lift">Lift:
          <select required name="lift" onChange={e => setLift(e.target.value)}>
              <option value="Flat Barbell Bench Press">Flat Barbell Bench Press</option>
              <option value="Barbell Overhead Press">Barbell Overhead Press</option>
              <option value="Back Squat">Back Squat</option>
              <option value="Barbell Deadlift">Barbell Deadlift</option>
              <option value="Pullup">Pullup</option>
          </select>
          <input required
            type="text"
            name="lift"
            value={lift}
            onChange={e => setLift(e.target.value)}
          />
        </label>
        <label for="date">Date:
          <input required
            type="date"
            name="date"
            value={date}
            onChange={e => setDate(e.target.value)}
          />
        </label>
        <label for="repetitions">Repetitions:
          <input required
            type="number"
            name="repetitions"
            value={reps}
            onChange={e => setReps(e.target.value)}
          />
        </label>
        <label for="weight_used">Weight Used:
          <input required
            type="number"
            name="weight"
            value={weight}
            onChange={e => setWeight(e.target.value)}
          />
          pounds
        </label>
        <button type="submit">Submit</button>
    </form>
  )
}

export default NewLiftForm;