import React, { useState, useEffect } from 'react'
import axios from 'axios'
import SummaryCard from './SummaryCard'
import StateWiseTable from './StateWiseTable'

function App() {
  const [covidData, setCovidData] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    const fethData = async () => {
      const { data } = await axios.get(
        'https://api.rootnet.in/covid19-in/stats/latest'
      )
      setCovidData(data)
      setLoading(false)
    }

    fethData()
  }, [])

  const { data, lastRefreshed, lastOriginUpdate } = covidData

  console.log(data)

  if (loading) {
    return <h1>Loading...</h1>
  }

  return (
    <div>
      <div>
        Last Updated : {new Date(lastOriginUpdate).toLocaleDateString()}
      </div>
      <div>{data && data.summary && <SummaryCard data={data.summary} />}</div>

      {data && data.regional && <StateWiseTable data={data.regional} />}
    </div>
  )
}

export default App
