import React from 'react'
import Card from 'react-bootstrap/Card'
import Table from 'react-bootstrap/Table'

function LiftCard({ lift }) {
  const { id, name, lift_sessions } = lift
  const oneRepMax = (weight, repetitions) => {
    return (weight * (36/(37 - repetitions)))
  }

  const tableRows = lift_sessions.map(record => {
    return (
      <tr>
        <td>{record.date}</td>
        <td>{record.weight} pounds</td>
        <td>{record.repetitions}</td>
        <td>{parseInt(oneRepMax(record.weight, record.repetitions))} pounds</td>
      </tr>
    )
  })

  



  return (
    <Card bg="light" className="lift-card">
      <Card.Title className="lift-title"><b>{name.toUpperCase()}</b></Card.Title> 
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>DATE</th>
            <th>WEIGHT</th>
            <th>REPETITIONS</th>
            <th>ESTIMATED 1RM</th>
          </tr>
        </thead>
        <tbody>
          {tableRows}
        </tbody>
      </Table>
      {/* <Card.Text>
        Most Recent Lift: {firstLift.repetitions} reps at {firstLift.weight} pounds
      </Card.Text>
      <Card.Text>
        Current Estimated 1-Rep Max: (fill this out)
      </Card.Text> */}
    </Card>
  )
}

export default LiftCard;