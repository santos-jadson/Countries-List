import React, { useEffect } from 'react';

import back from '../../assets/images/left-arrow.svg'

import brasil from '../../assets/images/brazil.svg.png'

import { Link } from 'react-router-dom'
import { handleIcon } from '../../util/iconsColor'
import { Container, CountryInfo } from './styles'

function Country() {

  useEffect(() => {
    handleIcon()
  }, [])

  return (
    <Container> 
      <Link to="/">{<img className="icon" src={back} alt="back"/>} Back</Link>
      <CountryInfo>
        <img src={brasil} alt="Brazil"/>
        <div className="country-info">
          <h1>Brazil</h1>
          <ul>
            <li>Native Name: <span>Brasil</span></li>
            <li>Population: <span>11,319,511</span></li>
            <li>Region: <span>Europe</span></li>
            <li>Sub Region: <span>Western Europe</span></li>
            <li>Capital: <span>Brussels</span></li>
            <li>Top Domain Level: <span>.be</span></li>
            <li>Currencies: <span>Euro</span></li>
            <li>Languages: <span>Dutch, French, German</span></li>
          </ul>

          <div className="border-countries">
            <h4>Border Countries:</h4>
            <Link to="/country/2">France</Link>
            <Link to="/country/3">Germany</Link>
            <Link to="/country/4">Netherlands</Link>
          </div>

        </div>
      </CountryInfo>
    </Container>
  );
}

export default Country;