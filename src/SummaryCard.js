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
    <div className='container-fluid text-center py-3 my-3 mx-auto'>
      <div className='row mx-auto'>
        <div className='col-6 p-2'>
          <h2 className='display-6'>Total Confirmed Cases</h2>
          <span className='display-6 py-2 px-2'>
            {new Intl.NumberFormat('en-IN').format(total)}
          </span>
        </div>
        <div className='col-6 p-2'>
          <h2 className='display-6'>Total Confirmed Indians</h2>
          <span className='display-6 py-2 px-2'>
            {new Intl.NumberFormat('en-IN').format(confirmedCasesIndian)}
          </span>
        </div>
        <div className='col-5 p-2'>
          <h2 className='display-6'>Total Confirmed Foreigners </h2>
          <span className='display-6 py-2 px-2'>
            {new Intl.NumberFormat('en-IN').format(confirmedCasesForeign)}
          </span>
        </div>
        <div className='col p-2'>
          <h2 className='display-6'>Total Discharged</h2>
          <span className='display-6 py-2 px-2'>
            {new Intl.NumberFormat('en-IN').format(discharged)}
          </span>
        </div>
        <div className='col p-2'>
          <h2 className='display-6'>Total Deaths</h2>
          <span className='display-6 py-2 px-2'>
            {new Intl.NumberFormat('en-IN').format(deaths)}
          </span>
        </div>
      </div>
    </div>
  )
}

export default SummaryCard
