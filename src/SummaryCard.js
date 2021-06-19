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
    <div className='container'>
      <div className='row'>
        <div className='col-lg-6 p-2 '>
          <h2 className='display-6 '>Total Confirmed Cases</h2>
          <span className='text-primary display-6'>
            {new Intl.NumberFormat('en-IN').format(total)}
          </span>
        </div>

        <div className='col-lg-6 p-2'>
          <h2 className='display-6'>Total Confirmed Indians</h2>
          <span className='text-warning display-6'>
            {new Intl.NumberFormat('en-IN').format(confirmedCasesIndian)}
          </span>
        </div>
        <div className='col-lg-6 p-2'>
          <h2 className='display-6 '>Total Confirmed Foreigners </h2>
          <span className='text-warning display-6'>
            {new Intl.NumberFormat('en-IN').format(confirmedCasesForeign)}
          </span>
        </div>
        <div className='col-lg-6 p-2'>
          <h2 className='display-6 '>Total Discharged</h2>
          <span className='text-success display-6'>
            {new Intl.NumberFormat('en-IN').format(discharged)}
          </span>
        </div>
        <div className='col-lg-12 p-2'>
          <h2 className='display-6'>Total Deaths</h2>
          <span className='text-danger display-6'>
            {new Intl.NumberFormat('en-IN').format(deaths)}
          </span>
        </div>
      </div>
    </div>
  )
}

export default SummaryCard
