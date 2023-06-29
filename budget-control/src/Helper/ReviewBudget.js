export const reviewBudget = (budget, remaining) => {
  let classControl

  if ( (budget / 4) > remaining ) {
    classControl = 'budget-danger'
  } else if ( (budget / 2) > remaining ) {
    classControl = 'budget-warning'
  } else {
    classControl = 'budget-success'
  }

  return classControl
}

export const formatValueForCurrency = (number) => {
  return number.toLocaleString('es-CO', { style: 'currency', currency: 'COP' });
}