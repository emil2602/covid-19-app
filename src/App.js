import React, { useEffect, useState } from 'react';
import Preloader from './components/Preloader'
import CountriesList from './components/CountriesList'
import logo from './assets/logo.png'
import './App.css'
import Modal from './components/Modal';

const App = () => {

  const [covidData, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [inputValue, setInputValue] = useState('')
  const [active, setActive] = useState(false)
  const [country, setCountry] = useState('')
  const [totalConfirmed, setConfirmed] = useState('')
  const [totalRecovered, setRecovered] = useState('')
  const [totalDeaths, setDeaths] = useState('')


  const getCountries = () => {
    fetch('https://api.covid19api.com/summary')
    .then(res => res.json())
    .then(data => {
      setData(data.Countries)
      setLoading(false)
    })
  }

  useEffect(()=> {
    getCountries();
  }, [])

  const handleInput = event => {
    setInputValue(event.target.value.toLowerCase())
  }

  const filteredData = covidData.filter(country => {
    return country.Slug.includes(inputValue)
  })

  const showModalWindow = (country, confirmed, recovered, deaths) => {
     setActive(true)
     setCountry(country)
     setConfirmed(confirmed)
     setRecovered(recovered)
     setDeaths(deaths)
  }
  return (
    <>
    <header className='header container'>
        <div className='header-content'>
           <a href="/#" className='header-logo'>
            <img src={logo} alt={"Logo"}/>
           </a>
          <h1 className='header-title'>STATISTIC</h1>
        </div>
        <form className='search-form'>
          <input
            type='text'
            className='search-form__input'
            placeholder={'Search...'}
            onChange={handleInput}
          />
      </form>
    </header>
    <main className='main-content container'>
      {loading ? <Preloader/> : <CountriesList covidData = {filteredData} showModalWindow = {showModalWindow} />}
       <Modal active = {active} setActive = {setActive} covidData={filteredData} Country={country} TotalConfirmed = {totalConfirmed} TotalRecovered = {totalRecovered} TotalDeaths = {totalDeaths}/>
    </main>
    </>
  )
}

export default App
