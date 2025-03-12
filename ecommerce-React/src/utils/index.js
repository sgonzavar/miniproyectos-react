/**
 * This function calculate total price of new order
 * @param {Array} products cartProduct: Array of Object
 * @returns {number} Total price
 */

import moment from "moment/moment";

export const totalPrice = (products) => {
  let sum = 0;
  products.forEach(product => sum += product.price);
  return sum;
};

export const RandomDate = () => {
  const start = moment('01-01-2023')
  const end = moment()
  const generateRandomDate = moment(start + Math.random() * (end - start)).format('YYYY-MM-DD')
  return generateRandomDate 

}