import '../styles/CounterInput.css'
const CounterInput = ({clickTimes}) => {
  return (
    <div className="counter">{clickTimes}</div>
  )
}

export default CounterInput