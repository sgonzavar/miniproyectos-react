
// obtiene la diferencia de años
export const  getDifferenceYear = year => {
  return new Date().getFullYear() - year;
}


// calcula el total a pagar segun la marca
export const calculateMarquee = marquee => {
  let increment

  switch(marquee) {
    case 'europeo':
      increment = 1.30
      break
    case 'americano':
      increment = 1.15
      break
    case 'asiatico':
      increment = 1.05
      break
    default:
      break 
  }

  return increment
}

export const getPlan = plan => {
  return (plan === 'basic') ? 1.20 : 1.50
}

export const capitaliceWord = text => {
  return text.charAt(0).toUpperCase() + text.slice(1)
}