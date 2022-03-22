import React from 'react'
import Card from 'react-bootstrap/Card'

function LiftCard({ lift }) {

  return (
    <Card className="lift-card">
      <Card.Title>{lift.name}</Card.Title>
      <Card.Text>
        Most Recent Lift: (fill this out)
      </Card.Text>
      <Card.Text>
        Current Estimated 1-Rep Max: (fill this out)
      </Card.Text>
    </Card>
  )
}

export default LiftCard;