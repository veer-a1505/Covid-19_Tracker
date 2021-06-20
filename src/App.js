import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './index.css'
import SummaryCard from './SummaryCard'
import StateWiseTable from './StateWiseTable'
import { renameObjectProperty } from './utils'

function App() {
  const [covidData, setCovidData] = useState([])
  const [updatedTime, setUpdatedTime] = useState({})
  const [summary, setSummary] = useState({})
  const [loading, setLoading] = useState(false)
  const [query, setQuery] = useState('')

  useEffect(() => {
    setLoading(true)
    const fethData = async () => {
      const { data } = await axios.get(
        'https://api.rootnet.in/covid19-in/stats/latest'
      )

      setUpdatedTime(data.lastOriginUpdate)
      setSummary(data.data.summary)
      setCovidData(renameObjectProperty(data.data.regional))
      setLoading(false)
    }

    fethData()
  }, [])

  const dateTime = new Date(updatedTime)
    .toLocaleString('en-US', {
      hour12: true,
    })
    .split(',')

  const filterQuery = (items) => {
    return items.filter((item) => item.state.toLowerCase().indexOf(query) > -1)
  }

  const filterByAsc = (items, sortBy) => {
    let result = items.sort((a, b) => a[sortBy] - b[sortBy])
    setCovidData([...result])
  }

  const filterByDsc = (items, sortBy) => {
    let result = items.sort((a, b) => b[sortBy] - a[sortBy])
    setCovidData([...result])
  }

  if (loading) {
    return (
      <div className='d-flex justify-content-center my-5 text-primary'>
        <div className='spinner-border width-height' role='status'></div>
      </div>
    )
  }

  return (
    <div className='container-md text-center'>
      <div className='container-fluid justify-content-center bg-secondary text-white display-6 my-2 p-2 rounded-3'>
        Last Updated : {`${dateTime[0]} @ ${dateTime[1]}`}
      </div>

      <div>{summary && <SummaryCard data={summary} />}</div>

      <div className='p-3 m-auto d-flex justify-content-center'>
        <input
          className='form-control input-lg '
          type='text'
          placeholder="Search by state e.g 'tamilnadu'"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      {covidData && (
        <StateWiseTable
          data={filterQuery(covidData)}
          queryKeyword={query}
          filterByAce={filterByAsc}
          filterByDce={filterByDsc}
          rawData={covidData}
        />
      )}

      <div className='bg-secondary text-white rounded-3 my-2 p-2'>
        <h1>#StayHomeStaySafe</h1>
      </div>
    </div>
  )
}

export default App
