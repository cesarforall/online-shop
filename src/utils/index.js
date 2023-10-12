/**
 * This function calculates total price of a new order
 * @param {Array} products cartProduct: Array of Objects
 * @returns {Number} Total price
 */
export const totalPrice = (products) => {
  console.log(products)
  const total = products.reduce((sum, product) => sum + product.price, 0)
  console.log(total)
  return total
}
