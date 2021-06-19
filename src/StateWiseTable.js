import React, { useState } from 'react'
import _ from 'lodash'

const StateWiseTable = ({ data, queryKeyword }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [startIndex, setStartIndex] = useState(0)
  const [pageSize, setPageSize] = useState(10)

  const convertToNumberFormat = (data) => {
    let result = data.map((state) => ({
      id: _.uniqueId(),
      state: state.loc,
      confirmedCases: new Intl.NumberFormat('en-IN').format(
        state.totalConfirmed
      ),
      indian: new Intl.NumberFormat('en-IN').format(state.confirmedCasesIndian),
      foreigner: new Intl.NumberFormat('en-IN').format(
        state.confirmedCasesForeign
      ),
      active: new Intl.NumberFormat('en-IN').format(
        Number(state.totalConfirmed) - Number(state.discharged + state.deaths)
      ),
      discharged: new Intl.NumberFormat('en-IN').format(state.discharged),
      deaths: new Intl.NumberFormat('en-IN').format(state.deaths),
    }))

    return result
  }

  let covidData = convertToNumberFormat(data)

  const pageCount = covidData ? Math.ceil(covidData.length / 10) : 0

  const pages = _.range(1, pageCount + 1)

  const pagination = (pageNo) => {
    setCurrentPage(pageNo)
    const startIndex = (pageNo - 1) * 10
    setStartIndex(startIndex)
    setPageSize(pageNo * 10)
  }

  if (data.length === 0) {
    return (
      <div>
        <h2>No matches found with "{queryKeyword}"</h2>
      </div>
    )
  }

  return (
    <div className='container table-responsive m-auto'>
      {!covidData.slice(startIndex, pageSize) ? (
        'No data Found'
      ) : (
        <table className='table table-bordered'>
          <thead className='text-dark bg-light rounded-3'>
            <tr>
              <th>State</th>
              <th>Total Confirmed Cases</th>
              <th>Active Cases</th>
              <th>Indians</th>
              <th>Foreigner</th>
              <th>Discharged</th>
              <th>Deaths</th>
            </tr>
          </thead>

          <tbody>
            {covidData.slice(startIndex, pageSize).map((data) => (
              <tr key={data.id} className='text-dark'>
                <td className='text-secondary'>{data.state}</td>
                <td>{data.confirmedCases}</td>
                <td>{data.active}</td>
                <td>{data.indian}</td>
                <td>{data.foreigner}</td>
                <td>{data.discharged}</td>
                <td>{data.deaths}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <nav className='navbar d-flex justify-content-center'>
        <ul className='pagination'>
          {pages.map((page) => (
            <li
              key={page}
              className={
                page === currentPage ? 'page-item active' : 'page-item'
              }>
              <p className='page-link' onClick={() => pagination(page)}>
                {page}
              </p>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default StateWiseTable
