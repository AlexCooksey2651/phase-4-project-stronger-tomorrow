import React, { useState, useEffect } from 'react'
import LiftCard from "../components/LiftCard"

function Dashboard() {
  const [liftRecords, setLiftRecords] = useState([])
  const [lifts, setLifts] = useState([])

  useEffect(() => {
    fetch('/lift_sessions')
    .then(r => r.json())
    .then(records => setLiftRecords(records)) 
  }, [])

  useEffect(() => {
    fetch('/lifts')
    .then(r => r.json())
    .then(lifts => setLifts(lifts))
  }, [])

  const liftCards = liftRecords.map(lift => {
    <LiftCard key={lift.id} lift={lift} />
  })

  return (
    <div id="dashboard">
      {liftCards}
    </div>
  )
}

export default Dashboard;