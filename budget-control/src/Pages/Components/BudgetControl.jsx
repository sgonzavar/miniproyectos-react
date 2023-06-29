import { formatValueForCurrency, reviewBudget } from "../../Helper/ReviewBudget"
import PropTypes from 'prop-types'


const BudgetControl = ({ budget, remaining }) => {
  return (
    <>
      <div className="budget-text">
        <p>budget: <span>{formatValueForCurrency(budget)}</span></p> 
      </div>
      <div className={reviewBudget(budget, remaining)}>
        <p>remaining:  <span>{formatValueForCurrency(remaining)}</span></p>
      </div>
    </>
  )
}

BudgetControl.propTypes = {
  budget: PropTypes.number.isRequired,
  remaining: PropTypes.number.isRequired,
}

export default BudgetControl