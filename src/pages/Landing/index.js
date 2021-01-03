import React, { useEffect, useState } from 'react';

import search from '../../assets/images/loupe.svg'
/*import brasil from '../../assets/images/brazil.svg.png'
import belgica from '../../assets/images/belgica.jpg'
import eua from '../../assets/images/eua.jpg'
import italia from '../../assets/images/italia.svg'*/

import { handleIcon } from '../../util/iconsColor'
import { Link } from 'react-router-dom'

import { MainContainer, CountryList } from './styles'

function Landing() {
  const [countries, setCountries] = useState(null)

  useEffect(() => {
    handleIcon()
  }, [])

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

  if(!countries){
    return (
      <h1>Carregando</h1>
    )
  }

  return (
    <MainContainer>
        <div className='inputs'>
          <div className='input-search'>
            <img className='icon' src={search} alt="search" />
            <input type="text" placeholder="Search for a country..."/>
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
    </MainContainer>
  );
}

export default Landing;