/**
 * This function calculates total price of a new order
 * @param {Array} products cartProduct: Array of Objects
 * @returns {Number} Total price
 */
export const totalPrice = (products) => {
  const total = products.reduce((sum, product) => sum + product.price, 0)
  return total
}

export function getRandomNumbers (n, max) {
  const randomNumbers = []

  for (let i = 0; i < n; i++) {
    const random = Math.floor(Math.random() * max)
    randomNumbers.push(random)
  }

  return randomNumbers
}

export function getCurrentPathSubstring () {
  const currentPath = window.location.pathname
  const currentPathSlashIndex = currentPath.lastIndexOf('/')
  const currentPathSubstring = currentPath.substring(currentPathSlashIndex + 1, currentPath.length)
  return currentPathSubstring
}
