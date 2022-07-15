import { onSnake, expandSnake } from './snake.js'
import { randomGridPosition } from './grid.js'

let food = getRandomFoodPosition() // Minimum 1,1
const EXPENSION_RATE = 10

export function update()   {
  if(onSnake(food)) {
    expandSnake(EXPENSION_RATE)
    food = getRandomFoodPosition()
    
  }
}

export function draw(gameBoard) {
    console.log('draw snake')
 
    const foodElement = document.createElement('div')
    foodElement.style.gridRowStart = food.y
    foodElement.style.gridColumnStart = food.x
    foodElement.classList.add('food')
    gameBoard.appendChild(foodElement)
    
}
function getRandomFoodPosition() {
  let newFoodPosition
  while (newFoodPosition == null || onSnake(newFoodPosition)) {
    newFoodPosition = randomGridPosition()
  }
  return newFoodPosition
}