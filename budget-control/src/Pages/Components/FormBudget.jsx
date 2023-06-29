import { useState } from 'react'
import PropTypes from 'prop-types'
import ErrorMessage from './ErrorMessage'
import shortid from 'shortid'

const FormBudget = ({ addNewSpends, onCreateSpend }) => {

  const [nameSpend, setNameSpend] = useState('')
  const [validator, setValidator] = useState(false)
  const [amountSpend, setAmountSpend] = useState(0)

  const resetValuesForm = () => {
    setNameSpend('')
    setAmountSpend('')
  }

  const sendDataFormBudget = e => {
    e.preventDefault()

    if(amountSpend < 1 || isNaN(amountSpend) || nameSpend.trim() === '') {
      setValidator(true)
      return
    }
    setValidator(false)

    // create spend for App component
    const spend = {
      nameSpend,
      amountSpend,
      id: shortid.generate()
    }
    // send spend to App component
    addNewSpends(spend)
    onCreateSpend(true)
    resetValuesForm()
  }

  return (
    <form
      onSubmit={ sendDataFormBudget }
      className='expenses-container'
    >
      <h2>add your expenses</h2>
      { validator ? <ErrorMessage message={'both fields are required or incorrect budget'} /> : null }
      <div className='expeses-form'>
        <span>name spend</span>
        <input 
          type="text" 
          className='u-full-width'
          placeholder='Ej. food'
          value={ nameSpend }
          onChange={e => setNameSpend( e.target.value )}
        />
        <span>amount spend</span>
        <input 
          type="number" 
          className='u-full-width'
          placeholder='xxx-xxx-xxx'
          value={ amountSpend }
          onChange={e => setAmountSpend( parseInt(e.target.value, 10) )}
        />
        <input 
          type="submit" 
          className='button-send u-full-width'
          value={'add spend'}
        />
      </div>
    </form>
  )
}

FormBudget.propTypes = {
  onCreateSpend: PropTypes.func.isRequired,
  addNewSpends: PropTypes.func.isRequired,
}

export default FormBudget