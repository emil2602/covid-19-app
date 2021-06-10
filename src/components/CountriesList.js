
import React from 'react'
import Country from './Country'

const CountriesList = (props) => {

  const { covidData, showModalWindow } = props

  return (
    <div>
      <table className = 'table'>
        <thead className = 'table-head'>
          <tr className = 'table-head__row'>
            <th className = 'table-head__nums'>№</th>
            <th className = 'table-head__country'>Country</th>
            <th className = 'table-head__total'>Total Confirmed</th>
          </tr>
        </thead>
        <tbody>
          {!covidData.length ? <tr><td className='empty'>Empty...</td></tr>  : covidData.map((item, index) => {
            return <Country {...item} index = {index + 1} key = {index} showModalWindow = {showModalWindow} />
          })}
        </tbody>
      </table>
    </div>
  )
}




export default CountriesList