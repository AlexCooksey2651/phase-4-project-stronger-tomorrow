import React, { useState, useEffect } from 'react'
import Accordion from 'react-bootstrap/Accordion'
import LiftCard from "../components/LiftCard"

function Dashboard({ user }) {
  const [liftSessions, setLiftSessions] = useState(user.lift_sessions)
  const [lifts, setLifts] = useState([])

  useEffect(() => {
    fetch('/lifts')
    .then(r => r.json())
    .then(lifts => setLifts(lifts))
  }, [])

  
  const liftCards = lifts.map(lift => {
    const filteredRecords = liftSessions.filter(record => {
      return record.lift.name === lift.name
    })
    return <LiftCard key={lift.id} lift={lift} filteredRecords={filteredRecords}/>
  })

  return (
    <Accordion id="lift-card-container">
      {liftCards}
    </Accordion>
  )
}

export default Dashboard;