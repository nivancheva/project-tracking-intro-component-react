import './App.css'
import logo from './images/logo.svg';
import devicesImg from './images/illustration-devices.svg';
import iconHamburger from './images/icon-hamburger.svg';
import iconClose from './images/icon-close.svg';
import { useState } from 'react';


const menuLinks = [
  "Product",
  "Features",
  "Pricing",
];

function App() {

  const [menuVisible, setMenuVisible] = useState(false);

  function toggleMenu() {
    setMenuVisible(!menuVisible)
  }

  return (
    <div>
      <nav className='container nav-container'>
        <div className='flex-container header'>
          <picture><img src={logo}/></picture>
          <ul className={`flex-container nav-bar ${menuVisible ? "" : "mobile-menu-hidden"} `}>
            {menuLinks.map((menuLink, idx) => {
              return (
                <li key={idx}><a className='links'>{menuLink}</a></li>
              )
            })}
            <button className='links button_login'>Login</button>
          </ul>
            <button onClick={toggleMenu} className={menuVisible ? "menuClose" : "menuHamburger"}>
              <img src={menuVisible ? iconClose : iconHamburger}/> 
            </button>
        </div>       
      </nav>

      <img src={devicesImg}/>

      <main className='conteiner'>
        <div>
          <p>New</p>
          <p>Monograph Dashboard</p>
        </div>
        <div>
          <h1>Powerful Insights into your team</h1>
          <p className='lowerCase'>Project planning and time tracking for agile teams</p>
        </div>
        <div>
          <button className='button'>Shedule a demo</button>
          <p>To see a preview</p>
        </div>
      </main>
    </div>
  )
}

export default App
