// I want the character to move based on arrow inputs
// Set event listner for key presses

document.addEventListener('keyup', moveCharacter)

// Set up character

let character = document.createElement('img')
character.setAttribute("src", "./images/character.jpeg")
character.setAttribute("class", "character")

// Set starting position of character on screen

document.getElementById('start').appendChild(character)

// Set parameters of where character could move

let moveArea = document.getElementsByTagName('td')

// for fun, make him move randomly based on a key press
// It's so much fun, but kind of useless

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min
}

function moveCharacter() {
  let newArea = moveArea[getRandomNumber(0, moveArea.length)]
  newArea.appendChild(character)
}
