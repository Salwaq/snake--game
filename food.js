import { randomGridPosition } from "./grid.js"
import { onSnake, expandSnake } from "./snake.js"
let food = getRandomFoodPosition()
const EXPANSION_RATE = 1

export function update() {
  if (onSnake(food)) {
    expandSnake(EXPANSION_RATE)
    food = randomGridPosition()
  }
}

export function drow(gameBoard) {
  const foodElement = document.createElement("div")
  foodElement.style.gridColumnStart = food.x
  foodElement.style.gridRowStart = food.y
  foodElement.classList.add("food")
  // console.log(foodElement)
  gameBoard.appendChild(foodElement)
}

function getRandomFoodPosition() {
  let newFoodPosition
  while (newFoodPosition == null || onSnake(newFoodPosition)) {
    newFoodPosition = randomGridPosition() // راندوم قريد دالة ترجع لي موقع عشوائي على القريد
  }

  return newFoodPosition
}
