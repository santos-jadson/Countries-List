import React, { useCallback, useEffect, useState } from 'react';

import back from '../../assets/images/left-arrow.svg'

import { Link, useHistory, useParams } from 'react-router-dom'
import { handleIcon } from '../../util/iconsColor'

import { Container, CountryInfo } from './styles'

function Country() {
  const [ border, setBorder ] = useState(null)

  const { goBack } = useHistory()
  const [ country, setCountry ] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    handleIcon()
  }, [])

  const fetchBorders = useCallback( borderArray => {
    const helperArray = []
    setBorder([])

    for(let bord of borderArray) {
      fetch(`https://restcountries.eu/rest/v2/alpha/${bord}?fields=name;`)
        .then(response => {
          response.json()
            .then(res => {
              helperArray.push(res.name)
              setBorder([...helperArray])
            })
        })
    }
  }, [])

  useEffect(() => {
    const url = `https://restcountries.eu/rest/v2/name/${id}`

    fetch(url)
      .then(response => {
        response.json()
          .then(res => {
            setCountry(res[0])
            fetchBorders(res[0].borders)
          })
      })
  }, [id, fetchBorders])

  if(!country || !border){
    return <h1>Carregando...</h1>
  }

  return (
    <Container> 
      <button type="button" onClick={goBack}>{<img className="icon" src={back} alt="back"/>} Back</button>
      <CountryInfo>
        <img src={country.flag} alt={country.name}/>
        <div className="country-info">
          <h1>{country.name}</h1>
          <ul>
            <li>Native Name: <span>{country.nativeName}</span></li>
            <li>Population: <span>{country.population}</span></li>
            <li>Region: <span>{country.region}</span></li>
            <li>Sub Region: <span>{country.subregion}</span></li>
            <li>Capital: <span>{country.capital}</span></li>
            <li>Top Domain Level: <span>{country.topLevelDomain.map(domain => `${domain}, `)}</span></li>
            <li>Currencies: <span>{country.currencies.map(currencie => `${currencie.name}, `)}</span></li>
            <li>Languages: <span>{country.languages.map(lang => `${lang.name}, `)}</span></li>
          </ul>

          <div className="border-countries">
            <h4>Border Countries:</h4>
            { border.map(bd => 
                <Link key={bd} to={`/country/${bd}`}>{bd}</Link>
              )
            }
          </div>

        </div>
      </CountryInfo>
    </Container>
  );
}

export default Country;