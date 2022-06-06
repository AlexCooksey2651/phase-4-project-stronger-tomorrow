import React from 'react'
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'

function LiftChart({ data, targetReps, repMaxConverter }) {
  const weight = `Estimated ${targetReps} Rep-Max`

  const chartData = data.reverse().map(record => {
    return { date: record.date, weight: parseInt(repMaxConverter(record.weight, record.repetitions, targetReps)) }
  })

  return (
    <div style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer>
        <LineChart width={800} height={400} data={chartData} margin={{ top: 25, right: 5, left: 15, bottom: 5 }} >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis dataKey="weight" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="weight" stroke="#8884d8" strokeWidth={2} activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default LiftChart