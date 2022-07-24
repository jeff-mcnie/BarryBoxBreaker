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
  let breaks = document.getElementById('breaks')
  

  console.log(newBox)

  if (relic == 3) {
    gameOver()
  } else if (newArea == startBox) {

  startBox.removeChild(box)
  newArea.appendChild(character)
  newBox.appendChild(box)
  startBox = 0
  getItem()
  count++
  breaks.innerHTML = `You have broken ${count} boxes`

  } else if (newArea == newBox) {

    newBox.removeChild(box)
    newArea.appendChild(character)
    newBox = moveArea[getRandomNumber(0, moveArea.length)]
    newBox.appendChild(box)
    getItem()
    count++
    breaks.innerHTML = `You have broken ${count} boxes`

  } else {
    newArea.appendChild(character)
  }

  
}

function gameOver() {
  alert(`You have found 3 relics! Barry has broken enough boxes for today! You won the game`)
  document.location.reload()
}

function boxMove() {
  newBox = moveArea[getRandomNumber(0, moveArea.length)]
  newBox.appendChild(box)
}

let relic = 0

function getItem() {
  let num = getRandomNumber(0, 5)
  let message = document.getElementById('message')
  let relics = document.getElementById('relics')
  

  console.log(num)
  switch (num) {
    case 0:
      message.innerHTML = `You found an old sock. EW!`
      break;

    case 1:
      message.innerHTML = `You found ... nothing! The box was empty!`
      break;

    case 2:
      message.innerHTML = `You found a raccoon! It escaped before you could grab it.`
      break;

    case 3:
      message.innerHTML = `You found another box! It was empty though.`
      break;

    case 4:
      message.innerHTML = `You found a relic!!!`
      relic++
      relics.innerHTML = `You have ${relic} relic(s)`
      message.innerHTML
      break;

  }
}
// Need to make commands so the movement isn't random.

// Need to add boxes (imgs with functionality) That the character can interact with
// Boxes will use a number number generator to generate a random reward from a list
// Low chance of getting a relic!
// Collect 5 relics to win the game!
// When box is opened. Another box is generated on a random square
