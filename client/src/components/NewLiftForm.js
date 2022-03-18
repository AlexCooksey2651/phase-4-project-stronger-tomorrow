import React, { useState } from 'react'

function NewLiftForm() {
  const [lift, setLift] = useState("")
  const [date, setDate] = useState("")
  const [reps, setReps] = useState("")
  const [weight, setWeight] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
  }

  return (
    <form id="newLiftForm" onSubmit={handleSubmit}>
        <label for="lift">Lift:
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
    </form>
  )
}

export default NewLiftForm