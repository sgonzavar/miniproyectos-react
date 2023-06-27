import PropTypes  from 'prop-types'

const Date = ({ date, deleteDate }) => {
  return (
    <div className='dates-container'>
      <p>Pet : <span>{date.petsName}</span></p>
      <p>Pet Owner : <span>{date.petOwner}</span></p>
      <p>Date : <span>{date.petDate}</span></p>
      <p>Hours : <span>{date.petTime}</span></p>
      <p>Symptoms : <span>{date.petSymp}</span></p>

      <div className="button-container">
        <button
          className='button eliminar u-full-width'
          onClick={() => deleteDate(date.id)}
        >Delete</button>
      </div>
    </div>
  )
}

Date.propTypes = {
  date: PropTypes.object.isRequired,
  deleteDate: PropTypes.func.isRequired
}

export default Date