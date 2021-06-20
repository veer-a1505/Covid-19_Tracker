import _ from 'lodash'
export const convertToNumberFormat = (data) => {
  let result = data.map((item) => ({
    id: _.uniqueId(),
    state: item.state,
    confirmedCases: new Intl.NumberFormat('en-IN').format(item.confirmedCases),
    indian: new Intl.NumberFormat('en-IN').format(item.indian),
    foreigner: new Intl.NumberFormat('en-IN').format(item.foreigner),

    active: new Intl.NumberFormat('en-IN').format(Number(item.active)),
    discharged: new Intl.NumberFormat('en-IN').format(item.discharged),
    deaths: new Intl.NumberFormat('en-IN').format(item.deaths),
  }))

  return result
}

export const renameObjectProperty = (data) => {
  let result = data.map((item) => ({
    state: item.loc,
    confirmedCases: item.totalConfirmed,
    indian: item.confirmedCasesIndian,
    foreigner: item.confirmedCasesForeign,
    active: item.totalConfirmed - (item.discharged + item.deaths),
    discharged: item.discharged,
    deaths: item.deaths,
  }))

  return result
}
