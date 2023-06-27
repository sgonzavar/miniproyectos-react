import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';
import PropTypes  from 'prop-types'


const Form = ({ dates }) => {

  const [error, setError] = useState(false)
  const [date, setDate] = useState({
    petsName: '',
    petOwner: '',
    petDate: '',
    petTime: '',
    petSymp: ''
  })

  const handleChange = e => {
    setDate({
      ...date,
      [e.target.name]: e.target.value
    })
  }

  const {petsName, petOwner, petDate, petTime, petSymp} = date

  const resetForm = () => {
    setDate({
      petsName: '',
      petOwner: '',
      petDate: '',
      petTime: '',
      petSymp: ''
    })
  }


  const handleDateSubmit = e => {
    e.preventDefault()
    if(petsName.trim() === '' || petOwner.trim() === '' || petDate.trim() === '' || petTime.trim() === '' || petSymp.trim() === '') {
      setError(true)
      return
    }
    setError(false)

    // assign an id state to date
    date.id = uuidv4()

    // send date son to fhater component
    dates(date)

    // reset form
    resetForm()
  }

  return (
    <>
      <h2>Create Date</h2>
      <form onSubmit={handleDateSubmit} >
        {error ? <p className='alerta-error'>All fields are required</p> : null}
        <span>Pet name</span>
        <input 
          type="text"
          name='petsName'
          className='u-full-width'
          placeholder='Pet name'
          onChange={handleChange}
          value={petsName}
        />

        <span>Pet owner</span>
        <input 
          type="text"
          name='petOwner'
          className='u-full-width'
          placeholder='pet owner'
          onChange={handleChange}
          value={petOwner}
        />

        <span>Date</span>
        <input 
          type="date"
          name='petDate'
          className='u-full-width'
          onChange={handleChange}
          value={petDate}
        />

        <span>Hours</span>
        <input 
          type="time"
          name='petTime'
          className='u-full-width'
          onChange={handleChange}
          value={petTime}
        />

        <span>Symptoms</span>
        <textarea 
          name="petSymp"
          className='u-full-width'
          onChange={handleChange}
          value={petSymp}
        ></textarea>
        
        <button
          type='submit'
          className='u-full-width button-primary'  
        >Add date</button>
      </form>
    </>
  )
}

Form.propTypes = {
  dates: PropTypes.func.isRequired
}

export default Form