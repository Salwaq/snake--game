import { snakeSpeed, update as updateSnake, drow as drowSnake, getSnakeHead, snakeIntersection } from "./snake.js"
import { update as updateFood, drow as drowFood } from "./food.js"
import { outsideGrid } from "./grid.js"
let lastRenderTime = 0
let gameOver = false
const gameBoard = document.getElementById("game-board")

function main(currentTime) {
  if (gameOver) {
    if (confirm("You Lose ! , press OK to restart.")) {
      window.location = "/"
    }
    return
  }
  window.requestAnimationFrame(main)
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
  if (secondsSinceLastRender < 1 / snakeSpeed) return

  // console.log(currentTime)
  //   console.log(secondsSinceLastRender)
  //   console.log("render")
  //   ع حسب سرعة السنيك >> تطبع بمعدل مرتين او مره بالثانيه

  lastRenderTime = currentTime

  update()
  drow()
}
window.requestAnimationFrame(main)

function update() {
  updateSnake()
  updateFood()
  checkDeath()
}
function drow() {
  gameBoard.innerHTML = ""

  drowSnake(gameBoard)
  drowFood(gameBoard)
}

function checkDeath() {
  gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}
