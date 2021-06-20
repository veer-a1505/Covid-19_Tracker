import React, { useState } from 'react'
import _ from 'lodash'
import { convertToNumberFormat } from './utils'

const StateWiseTable = ({
  data,
  queryKeyword,
  filterByAce,
  rawData,
  filterByDce,
  filter,
}) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [startIndex, setStartIndex] = useState(0)
  const [pageSize, setPageSize] = useState(10)

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

  const tableHead = Object.keys(covidData.slice(0, 1)[0])

  return (
    <div className='container text-capitalize table-responsive m-auto'>
      {!covidData.slice(startIndex, pageSize) ? (
        'No data Found'
      ) : (
        <table className='table table-bordered table-hover '>
          <thead className='text-dark  bg-light rounded-3'>
            <tr>
              <th className='text-muted display-6'>state</th>
              {tableHead.slice(2).map((item) => (
                <th key={item}>
                  <span className='text-muted'>{item}</span>
                  <div className='d-flex justify-content-evenly'>
                    <i
                      className='fas fa-sort-numeric-up-alt'
                      onClick={() => filterByAce(rawData, item)}></i>
                    <i
                      className='fas fa-sort-numeric-down-alt'
                      onClick={() => filterByDce(rawData, item)}></i>
                  </div>
                </th>
              ))}
              {/* <th>State</th>
              <th>
                Total Confirmed Cases
                <div className='d-flex justify-content-evenly'>
                  <i
                    className='fas fa-sort-numeric-up-alt '
                    onClick={() => filterByAce(rawData)}></i>
                  <i
                    className='fas fa-sort-numeric-down-alt'
                    onClick={() => filterByDce(rawData)}></i>
                </div>
              </th>
              <th>Active Cases </th>
              <th>Indians </th>
              <th>Foreigner </th>
              <th>Discharged </th>
              <th>Deaths </th> */}
            </tr>
          </thead>

          <tbody>
            {covidData.slice(startIndex, pageSize).map((data) => (
              <tr key={data.id} className='text-dark'>
                <td className='text-secondary'>{data.state}</td>
                <td>{data.confirmedCases}</td>
                <td>{data.indian}</td>
                <td>{data.foreigner}</td>
                <td>{data.active}</td>
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
