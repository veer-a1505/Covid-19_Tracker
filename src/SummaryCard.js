import React from 'react'

const SummaryCard = ({ data }) => {
  const {
    total,
    discharged,
    deaths,
    confirmedCasesIndian,
    confirmedCasesForeign,
  } = data

  return (
    <div>
      <div>
        <h2>Total Confirmed Cases</h2>
        <span>{new Intl.NumberFormat('en-IN').format(total)}</span>
      </div>
      <div>
        <h2>Total Confirmed Indians</h2>
        <span>
          {new Intl.NumberFormat('en-IN').format(confirmedCasesIndian)}
        </span>
      </div>
      <div>
        <h2>Total Confirmed Foreigners </h2>
        <span>
          {new Intl.NumberFormat('en-IN').format(confirmedCasesForeign)}
        </span>
      </div>
      <div>
        <h2>Total Discharged</h2>
        <span>{new Intl.NumberFormat('en-IN').format(discharged)}</span>
      </div>
      <div>
        <h2>Total Deaths</h2>
        <span>{new Intl.NumberFormat('en-IN').format(deaths)}</span>
      </div>
    </div>
  )
}

export default SummaryCard
