import React from 'react'


const Country = (props) => {

  const {
    Country,
    index,
    TotalConfirmed,
    TotalRecovered,
    TotalDeaths,
    showModalWindow,
  } = props


  return (
    <tr className = 'table-content'>
      <td className = 'table-content__index' >{index}</td>
      <td className = 'table-content__country' onClick = { () => showModalWindow(Country, TotalConfirmed, TotalRecovered, TotalDeaths) }>{Country}</td>
      <td className = 'table-content__total'>{TotalConfirmed}</td>
    </tr>
  )
}



export default Country