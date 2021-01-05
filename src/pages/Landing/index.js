import React, { useEffect, useState } from 'react';

import search from '../../assets/images/loupe.svg'

import { handleIcon } from '../../util/iconsColor'
import { Link } from 'react-router-dom'

import  Loading  from '../../components/Loading'

import { MainContainer, CountryList } from './styles'

function Landing() {
  const [countries, setCountries] = useState(null)

  useEffect(() => {
    fetchCountries()
  }, [])

  function fetchCountries(region = 'all') {
    let url = 'https://restcountries.eu/rest/v2/'
    
    if(region !== 'all')
      url += 'region/'
    
    url += region

    try {
      fetch(url)
      .then(response => {
        response.json().then(res => {
          setCountries(res)
          
        })
      })

    } catch (error) {
      setCountries(null)
      alert("There's an error. Please reaload the page.")
    }
  }

  function handleSearchCountry( { value } ) {
    let url = `https://restcountries.eu/rest/v2/name/${value}`

    if(!value)
      url = url.replace(`/name/${value}`, '');
    
    fetch(url)
      .then(response => {
        response.json().then(res => {
          setCountries(res)
        })
      })
  }

  if(!countries){
    return (
      <Loading />
    )
  }
  
  return (
    <MainContainer>
        <div className='inputs'>
          <div className='input-search'>
            <img className='icon' src={search} alt="search" />
            <input type="text" onChange={e => handleSearchCountry(e.target)} placeholder="Search for a country..."/>
          </div>
          <div className="select-region">
            <select id="countries" onChange={e => fetchCountries(e.target.value)}>
              <option hidden defaultValue value="default">Filter By Region</option>
              <option value="Africa" >Africa</option>
              <option value="americas" >America</option>
              <option value="Asia" >Asia</option>
              <option value="europe" >Europe</option>
              <option value="Oceania" >Oceania</option>
              <option value="all" >All</option>
            </select>
          </div>
        </div>
        <CountryList>
          { 
            countries.map(country => 
              <li key={country.name}>
                <Link to={`/country/${country.name}`}>
                  <img src={country.flag} alt="country.name"/>
                  <h3>{country.name}</h3>
                  <div className="country-info">
                    <h4>Population: <span>{country.population}</span></h4>
                    <h4>Region: <span>{country.region}</span></h4>
                    <h4>Capital: <span>{country.capital}</span></h4>
                  </div>
                </Link>
              </li>
            )
          }
          
        </CountryList>
        {handleIcon()}
    </MainContainer>
  );
}

export default Landing;