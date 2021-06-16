import React from 'react'
import _ from 'lodash'

const StateWiseTable = ({ data }) => {
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
      discharged: new Intl.NumberFormat('en-IN').format(state.discharged),
      deaths: new Intl.NumberFormat('en-IN').format(state.deaths),
    }))

    return result
  }

  let covidData = convertToNumberFormat(data)
  return (
    <div>
      {!covidData ? (
        'No data Found'
      ) : (
        <table className='table table-bordered'>
          <thead>
            <tr>
              <th>state</th>
              <th>totalConfirmed</th>
              <th>confirmedCasesIndian</th>
              <th>confirmedCasesForeign</th>
              <th>discharged</th>
              <th>deaths</th>
            </tr>
          </thead>

          <tbody>
            {covidData.map((data) => (
              <tr key={data.id}>
                <td>{data.state}</td>
                <td>{data.confirmedCases}</td>
                <td>{data.indian}</td>
                <td>{data.foreigner}</td>
                <td>{data.discharged}</td>
                <td>{data.deaths}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}

export default StateWiseTable
