import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'
import Accordion from 'react-bootstrap/Accordion'
import LiftChart from './LiftChart'

function LiftCard({ lift, filteredRecords }) {
  const [targetReps, setTargetReps] = useState(1)
  const { id, name } = lift
  const oneRepMax = (weight, repetitions) => {
    return (weight * (36 / (37 - repetitions)))
  }
  const [cardRecords, setCardRecords] = useState(filteredRecords)
  const sortedRecords = cardRecords.slice().sort((a,b) => (Date.parse(b.date) - Date.parse(a.date)))

  function updateRecords(deletedRecord) {
    const remainingRecords = cardRecords.filter(record => {
      return record.id !== deletedRecord.id
    })
    setCardRecords(remainingRecords)
  }
  
  function handleDeleteRecord(record) {
    console.log(record)
    fetch(`/lift_sessions/${record.id}`, {
      method: "DELETE",
    })
      .then(r => {
        if (r.ok) {
          updateRecords(record)
        }
      })
  }


  const tableRows = sortedRecords.map(record => {
    return (
      <tr key={record.id}>
        <td>{record.date}</td>
        <td>{record.weight} pounds</td>
        <td>{record.repetitions}</td>
        <td>{parseInt(repMaxConverter(record.weight, record.repetitions, targetReps))} pounds</td>
        <td>
          <Button size="sm" variant="outline-dark" className="delete-record-button" onClick={() => handleDeleteRecord(record)}>DELETE</Button>
        </td>
      </tr>
    )
  })

  function repMaxConverter(weight, repsDone, targetReps) {
    const orm = oneRepMax(weight, repsDone)
    switch (targetReps) {
      case 1: return orm;
      case 2: return orm * 0.95;
      case 3: return orm * 0.92;
      case 4: return orm * 0.89;
      case 5: return orm * 0.86;
      case 6: return orm * 0.83;
      case 7: return orm * 0.81;
      case 8: return orm * 0.79;
      case 9: return orm * 0.77;
      case 10: return orm * 0.75;
      case 11: return orm * 0.73;
      case 12: return orm * 0.71;
      case 13: return orm * 0.70;
      case 14: return orm * 0.68;
      case 15: return orm * 0.67;
      case 16: return orm * 0.65;
      case 17: return orm * 0.64;
      case 18: return orm * 0.63;
      case 19: return orm * 0.62;
      case 20: return orm * 0.61;
      default: return "Please select between 1 and 20 reps"
    }
  }

  if (sortedRecords.length > 0) {
    return (
      <Accordion.Item eventKey={id - 1} className="lift-card">
        <Accordion.Header className="lift-title">
          <span>
            <b>{name.toUpperCase()}</b>
            <br />
            <br />
            Current Estimated 1-Rep Max: {parseInt(oneRepMax(sortedRecords[0].weight, sortedRecords[0].repetitions))}
          </span>
        </Accordion.Header>
        <Accordion.Body>
          <LiftChart data={sortedRecords} targetReps={targetReps} repMaxConverter={repMaxConverter}/>
          <br/>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>DATE</th>
                <th>WEIGHT</th>
                <th>REPETITIONS</th>
                <th>ESTIMATED 
                  <select className="target-rep-selector" onChange={(e) => setTargetReps(parseInt(e.target.value))}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                  </select>
                  RM
                </th>
                <th>DELETE RECORD</th>
              </tr>
            </thead>
            <tbody>
              {tableRows}
            </tbody>
          </Table>
        </Accordion.Body>
      </Accordion.Item>
    )
  } else {
    return (
      <Accordion.Item eventKey={id - 1} className="lift-card">
        <Accordion.Header className="lift-title">
          <span>
            <b>{name.toUpperCase()}</b>
            <br />
            <br />
            <em>No Records Exist for this Lift</em>
          </span>
        </Accordion.Header>
      </Accordion.Item>
    )
  }
}

  export default LiftCard;

  