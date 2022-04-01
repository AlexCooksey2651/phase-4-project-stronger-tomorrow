import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts'

function LiftChart({ data, targetReps, repMaxConverter }) {
  const weight=`Estimated ${targetReps} Rep-Max`

  const chartData = data.map(record => {
    return {date: record.date, weight: parseInt(repMaxConverter(record.weight, record.repetitions, targetReps))}
  })

  return (
    <LineChart width={800} height={400} data={chartData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date"/>
      <YAxis dataKey="weight"/>
      <Tooltip />
      <Line type="monotone" dataKey="weight" stroke="#8884d8" activeDot={{ r: 8 }}/>
    </LineChart>
  )
}

export default LiftChart