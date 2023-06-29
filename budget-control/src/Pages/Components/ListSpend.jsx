import Spend from './Spend'
import PropTypes from 'prop-types'

const ListSpend = ({ newSpends }) => {
  return (
    <div className='spend-list'>
      <h2>List spend</h2>
      { newSpends.map(spend => (
        <Spend 
          key={spend.id} 
          spend={spend} 
        />
      ))}
    </div>
  )
}

ListSpend.propTypes = {
  newSpends: PropTypes.array.isRequired,
}

export default ListSpend