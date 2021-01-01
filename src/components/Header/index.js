import moon from '../../assets/images/moon.svg'

import { Link } from 'react-router-dom'

import { Container } from './styles';

function Header() {

  function handleSwitchTheme() {

    const html = document.querySelector('html')
    const icons = document.getElementsByClassName('icon');

    html.classList.toggle('dark-mode')
    for(let icon of icons){
      icon.classList.toggle('dark-icon')
    }
  }

  return <Container>
    <li className="logo"><Link to="/">Where in the world?</Link></li>
    <li>
      <div className="theme-switcher" onClick={() => handleSwitchTheme()}>
        <img className="icon" src ={moon} alt="Dark Mode"/>
        <span>Dark Mode</span>
      </div>
    </li>
  </Container>;
}

export default Header;