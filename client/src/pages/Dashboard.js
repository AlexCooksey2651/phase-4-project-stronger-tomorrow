import React, { useState, useEffect } from 'react'
import Accordion from 'react-bootstrap/Accordion'
import LiftCard from "../components/LiftCard"

function Dashboard({ user }) {
  const { id, first_name, last_name, age, height, weight, email, password, lift_sessions } = user
  const [lifts, setLifts] = useState([])

  // useEffect(() => {
  //   fetch('/lift_sessions')
  //   .then(r => r.json())
  //   .then(records => setLiftRecords(records)) 
  // }, [])

  useEffect(() => {
    fetch('/lifts')
    .then(r => r.json())
    .then(lifts => setLifts(lifts))
  }, [])

  
  const liftCards = lifts.map(lift => {
    const filteredRecords = lift_sessions.filter(record => {
      return record.lift.name === lift.name
    })
    return <LiftCard key={lift.id} lift={lift} liftRecords={filteredRecords}/>
  })

  return (
    <Accordion id="lift-card-container">
      {liftCards}
    </Accordion>
    // <div id="dashboard">
    //   {liftCards}
    // </div>
  )
}

export default Dashboard;