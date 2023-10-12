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
    <div className='bg-light-gray'>
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
      
      <div className='reverce-grid overflow_hidden container'>
      <img className='device_img' src={devicesImg}/>

      <main className=''>
        <div className='flex-container paragraph'>
          <p className='bg-black'>New</p>
          <p className='clr-gray'>Monograph Dashboard</p>
        </div>
        <div>
          <h1>Powerful Insights into your team</h1>
          <p className='lowerCase'>Project planning and time tracking for agile teams</p>
        </div>
        <div className='flex-container button-area'>
          <button className='button'>Shedule a demo</button>
          <p>To see a preview</p>
        </div>
      </main>
      </div>
    </div>
  )
}

export default App
