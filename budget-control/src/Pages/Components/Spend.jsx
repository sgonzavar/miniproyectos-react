import PropTypes from 'prop-types'
import { formatValueForCurrency } from '../../Helper/ReviewBudget'

const Spend = ({ spend }) => {
  return (
    <li className='spends'>
      <p>
          {spend.nameSpend}: 
          <span className='spend'>{formatValueForCurrency(spend.amountSpend)}</span>
      </p>
    </li>
  )
}

Spend.propTypes = {
  spend: PropTypes.object.isRequired,
}

export default Spend