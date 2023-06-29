import PropTypes from 'prop-types'

const ErrorMessage = ({ message }) => {
  return (
    <p className='alert-error-message'>{ message }</p>
  )
}

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired,
}

export default ErrorMessage