import { useState } from 'react'
import { ButtonCount } from './components/ButtonCount'
import CounterInput from './components/CounterInput'
import './styles/App.css'

function App() {
  const logoImage = "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/FreeCodeCamp_logo.svg/800px-FreeCodeCamp_logo.svg.png"
  const [countClick, setCountClick] = useState(0)

  const pilotClick = () => {
    setCountClick( countClick + 1)
  }

  const resetCouter = () => {
    setCountClick(0)
  }
 
  return (
    <div className='App'>
      <div className="container-image">
        <img src={logoImage} alt="freecodelogo" />
      </div>
      <div className="container-counter">
        <CounterInput 
          clickTimes={countClick}
        />
        <ButtonCount 
          text="click"
          isButtonClick={true}
          listenPilotClick={pilotClick}
        />
        <ButtonCount 
          text="reset"
          isButtonClick={false}
          listenPilotClick={resetCouter}
        />
      </div>
    </div>
  )
}

export default App
