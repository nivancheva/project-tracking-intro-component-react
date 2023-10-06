import './App.css'
import logo from './images/logo.svg';
import devicesImg from './images/illustration-devices.svg'

const menuLinks = [
  "Product",
  "Features",
  "Pricing",
];

function App() {

  return (
    <div>
      <nav>
        <div>
          <img src={logo}/>
          <ul>
            {menuLinks.map((menuLink, idx) => {
              return (
                <li key={idx}><a>{menuLink}</a></li>
              )
            })}
            <li><a>Login</a></li>
          </ul>
        </div>       
      </nav>

      <img src={devicesImg}/>

      <main>
        <div>
          <p>New</p>
          <p>Monograph Dashboard</p>
        </div>
        <div>
          <h1>Powerful Insights into your team</h1>
          <p>Project planning and time tracking for agile teams</p>
        </div>
        <div>
          <button>Shedule a demo</button>
          <p>To see a preview</p>
        </div>
      </main>
    </div>
  )
}

export default App
