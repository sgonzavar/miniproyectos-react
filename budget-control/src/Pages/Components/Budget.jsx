import { useState } from "react"
import ErrorMessage from "./ErrorMessage"
import PropTypes from 'prop-types'


const Budget = ({ setBudget, setRemaining, setShowQuestion }) => {

  const [totalBudget, setTotalBudget] = useState('')
  const [validator, setValidator] = useState(false)

  const handleBugdet = (e) => {
    setTotalBudget(parseInt(e.target.value))
  }

  const handleAddBudget = (e) => {
    e.preventDefault();
    if(totalBudget < 1 || isNaN(totalBudget)) {
      setValidator(true)
      return
    }
    setValidator(false)

    //send budget to App component
    setBudget(totalBudget)
    setRemaining(totalBudget)
    setShowQuestion(false)
  }

  return (
    <>
      <h2>place your budget</h2>
      
      { validator ? <ErrorMessage message='error budget' /> : null }
      
      <form
        onSubmit={handleAddBudget}
        className='form-container-budget'
      >
        <input 
          type="text" 
          className="u-full-width"
          placeholder="Budget"
          onChange={handleBugdet}
        />
        <input 
          type="submit" 
          className="button-budget u-full-width"
          value="Define budget"
        />
      </form>
    </>
  )
}

Budget.propTypes = {
  setBudget: PropTypes.number.isRequired, 
  setRemaining: PropTypes.number.isRequired, 
  setShowQuestion: PropTypes.bool.isRequired
}

export default Budget