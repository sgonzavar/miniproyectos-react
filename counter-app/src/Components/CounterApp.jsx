import { useState } from 'react'
import PropTypes from 'prop-types'

const CounterApp = ({ value }) => {

  const [counter, setCounter] = useState(value)


  const handleAdd = () => setCounter( counter + 1 ) 
  const handleReduce = () => setCounter( counter - 1 ) 
  const handleReset = () => setCounter( value ) 
  
  return (
    <>
      <h1>Counter App</h1>
      <h2>{ counter }</h2>

      <div className="contain-button">
        <button onClick={handleAdd} >+1</button>
        <button onClick={handleReduce} >-1</button>
        <button onClick={handleReset} > Reset </button>
      </div>

    </>
  )
}

export default CounterApp

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
}

// CounterApp.defaultProps = {
//   value: 80
// }