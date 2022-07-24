// I want the character to move based on arrow inputs
// Set event listner for key presses

document.addEventListener('keyup', moveCharacter)

// Set up character

let character = document.createElement('img')
character.setAttribute("src", "./images/character.jpeg")
character.setAttribute("class", "character")

// Set up box

let box = document.createElement('img')
box.setAttribute("src", "./images/box.jpeg")
box.setAttribute("class", "character")

// Setup a table that will act as the playing field


// Set starting position of character on screen

document.getElementById('start').appendChild(character)

// Set parameters of where character could move

let moveArea = document.getElementsByTagName('td')

function keyPressed(e) {

  switch (e.key) {
    case 'ArrowUp':
      moveUp()
      break;
    case 'ArrowDown':
      moveDown()
      break;
    case 'ArrowLeft':
      moveLeft()
      break;
    case 'ArrowRight':
      moveRight()
      break;
  }
}

function moveUp() {

}

function moveDown() {

}

function moveLeft() {

}

function moveRight() {

}


// for fun, make him move randomly based on a key press
// It's so much fun, but kind of useless

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min
}
let newBox = moveArea[getRandomNumber(0, moveArea.length)]
let startBox = moveArea[getRandomNumber(0, moveArea.length)]
startBox.appendChild(box)
let count = 0

function moveCharacter() {
  let newArea = moveArea[getRandomNumber(0, moveArea.length)]
  newArea.appendChild(character)
}

// Need to make commands so the movement isn't random.

// Need to add boxes (imgs with functionality) That the character can interact with
// Boxes will use a number number generator to generate a random reward from a list
// Low chance of getting a relic!
// Collect 5 relics to win the game!
// When box is opened. Another box is generated on a random square
