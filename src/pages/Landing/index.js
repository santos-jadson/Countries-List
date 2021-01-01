import React, { useEffect } from 'react';

import search from '../../assets/images/loupe.svg'
import brasil from '../../assets/images/brazil.svg.png'
import belgica from '../../assets/images/belgica.jpg'
import eua from '../../assets/images/eua.jpg'
import italia from '../../assets/images/italia.svg'

import { handleIcon } from '../../util/iconsColor'
import { Link } from 'react-router-dom'

import { MainContainer, CountryList } from './styles'

function Landing() {
  useEffect(() => {
    handleIcon()
  }, [])
  
  return (
    <MainContainer>
        <div className='inputs'>
          <div className='input-search'>
            <img className='icon' src={search} alt="search" />
            <input type="text" placeholder="Search for a country..."/>
          </div>
          <div className="select-region">
            <select id="countries">
              <option hidden selected value="default">Filter By Region</option>
              <option value="africa">Africa</option>
              <option value="america">America</option>
              <option value="asia" >Asia</option>
              <option value="europe">Europe</option>
              <option value="oceania" >Oceania</option>
              <option value="all" >All</option>
            </select>
          </div>
        </div>
        <CountryList>
          <li>
            <Link to="/country/1">
              <img src={brasil} alt="brasil"/>
              <h3>Brazil</h3>
              <div className="country-info">
                <h4>Population: <span>206,135,893</span></h4>
                <h4>Regio: <span>Americas</span></h4>
                <h4>Capital: <span>Brasilia</span></h4>
              </div>
            </Link>
          </li>
          
          <li>
            <Link to="/country/1">
              <img src={belgica} alt="brasil"/>
              <h3>Brazil</h3>
              <div className="country-info">
                <h4>Population: <span>206,135,893</span></h4>
                <h4>Regio: <span>Americas</span></h4>
                <h4>Capital: <span>Brasilia</span></h4>
              </div>
            </Link>
          </li>
          
          <li>
            <Link to="/country/1">
              <img src={eua} alt="brasil"/>
              <h3>Brazil</h3>
              <div className="country-info">
                <h4>Population: <span>206,135,893</span></h4>
                <h4>Regio: <span>Americas</span></h4>
                <h4>Capital: <span>Brasilia</span></h4>
              </div>
            </Link>
          </li>
          
          <li>
            <Link to="/country/1">
              <img src={italia} alt="brasil"/>
              <h3>Brazil</h3>
              <div className="country-info">
                <h4>Population: <span>206,135,893</span></h4>
                <h4>Regio: <span>Americas</span></h4>
                <h4>Capital: <span>Brasilia</span></h4>
              </div>
            </Link>
          </li>
          
          <li>
            <Link to="/country/1">
              <img src={brasil} alt="brasil"/>
              <h3>Brazil</h3>
              <div className="country-info">
                <h4>Population: <span>206,135,893</span></h4>
                <h4>Regio: <span>Americas</span></h4>
                <h4>Capital: <span>Brasilia</span></h4>
              </div>
            </Link>
          </li>
          
          <li>
            <Link to="/country/1">
              <img src={brasil} alt="brasil"/>
              <h3>Brazil</h3>
              <div className="country-info">
                <h4>Population: <span>206,135,893</span></h4>
                <h4>Regio: <span>Americas</span></h4>
                <h4>Capital: <span>Brasilia</span></h4>
              </div>
            </Link>
          </li>
          
          <li>
            <Link to="/country/1">
              <img src={brasil} alt="brasil"/>
              <h3>Brazil</h3>
              <div className="country-info">
                <h4>Population: <span>206,135,893</span></h4>
                <h4>Regio: <span>Americas</span></h4>
                <h4>Capital: <span>Brasilia</span></h4>
              </div>
            </Link>
          </li>
          
          <li>
            <Link to="/country/1">
              <img src={brasil} alt="brasil"/>
              <h3>Brazil</h3>
              <div className="country-info">
                <h4>Population: <span>206,135,893</span></h4>
                <h4>Regio: <span>Americas</span></h4>
                <h4>Capital: <span>Brasilia</span></h4>
              </div>
            </Link>
          </li>
          
          <li>
            <Link to="/country/1">
              <img src={brasil} alt="brasil"/>
              <h3>Brazil</h3>
              <div className="country-info">
                <h4>Population: <span>206,135,893</span></h4>
                <h4>Regio: <span>Americas</span></h4>
                <h4>Capital: <span>Brasilia</span></h4>
              </div>
            </Link>
          </li>
          
          <li>
            <Link to="/country/1">
              <img src={brasil} alt="brasil"/>
              <h3>Brazil</h3>
              <div className="country-info">
                <h4>Population: <span>206,135,893</span></h4>
                <h4>Regio: <span>Americas</span></h4>
                <h4>Capital: <span>Brasilia</span></h4>
              </div>
            </Link>
          </li>
          
          <li>
            <Link to="/country/1">
              <img src={brasil} alt="brasil"/>
              <h3>Brazil</h3>
              <div className="country-info">
                <h4>Population: <span>206,135,893</span></h4>
                <h4>Regio: <span>Americas</span></h4>
                <h4>Capital: <span>Brasilia</span></h4>
              </div>
            </Link>
          </li>
          
          <li>
            <Link to="/country/1">
              <img src={brasil} alt="brasil"/>
              <h3>Brazil</h3>
              <div className="country-info">
                <h4>Population: <span>206,135,893</span></h4>
                <h4>Regio: <span>Americas</span></h4>
                <h4>Capital: <span>Brasilia</span></h4>
              </div>
            </Link>
          </li>
        </CountryList>
    </MainContainer>
  );
}

export default Landing;