/* eslint-disable no-console */
'use strict';

let discoCat = {
  name: 'spot',
  age: 5,
  born: 1982,
  favFood: 'fish',
};

console.log(discoCat);

let roster = [
  {
    number: 10,
    isActive: true,
    age: 30,
    name: 'Allen Hicks',
    pointsScored: 17,
    gamesPlayed: 2,
    yearsPlayed: 4,
    position: 'c',
  },
  {
    number: 11,
    isActive: true,
    age: 40,
    name: 'Concepcion Cash',
    pointsScored: 21,
    gamesPlayed: 6,
    yearsPlayed: 3,
    position: 'c',
  },
  {
    number: 12,
    isActive: false,
    age: 34,
    name: 'Carlson Morin',
    pointsScored: 24,
    gamesPlayed: 4,
    yearsPlayed: 1,
    position: 'lt',
  },
];

function topScoringPlayer(roster) {
  let topScore = 0;
  let topPlayer;
  for (let i = 0; i < roster.length; i++) {
    if (roster[i].pointsScored > topScore) {
      topScore = roster[i].pointsScored;
      topPlayer = roster[i];
    }
  }
  return topPlayer;
}

console.log(topScoringPlayer(roster));

// eslint-disable-next-line no-unused-vars
function namesAndNumbers(roster) {
  let playerNamesAndNumbers = [];
  for (let i = 0; i < roster.length; i++) {
    playerNamesAndNumbers.push(roster[i].name + '\n' + roster[i].number);
  }
  return playerNamesAndNumbers;
}

function countPlayersAtPosition(roster, position) {
  let playersAtPositionX = 0;
  for (let i = 0; i < roster.length; i++) {
    if (roster[i].position === position) {
      playersAtPositionX++;
    }
  }
  return playersAtPositionX;
}

const positionList = ['c', 'lt', 'rg', 'ww'];

function countPositions(roster, positions) {
  let o = {};
  for (let i = 0; i < positions.length; i++) {
    o[positions[i]] = countPlayersAtPosition(roster, positions[i]);
  }
  return o;
}

console.log(countPositions(roster, positionList));

// Indexing

let movie = 'Finding Nemo';
console.log(movie[0]); // 'F'
console.log(movie[1]); // 'i'
console.log(movie[2]); // 'n'

function firstCharacter(string) {
  return string[0];
}

function fifthCharacter(string) {
  return string[4];
}

function nthCharacter(string, n) {
  return string[n];
}

function logEachCharacter(string) {
  for (let i = 0; i < string.length; i++) {
    console.log(string[i]);
  }
}

function reverseString(string) {
  let reversedString = '';
  for (let i = string.length - 1; i > -1; i--) {
    reversedString += string[i];
  }
  return reversedString;
}

console.log(firstCharacter(movie));
console.log(fifthCharacter(movie));
console.log(nthCharacter(movie, 9));
console.log(reverseString(movie));
logEachCharacter(movie);

function addNewLineAfter(string) {
  return string + '\n';
}
function addTabBefore(string) {
  return '\t' + string;
}

function logEscapeCharacters() {
  // eslint-disable-next-line quotes
  let escapeCharacters = ['\n', '\t', "'", '"', '\\'];

  for (let i = 0; i < escapeCharacters.length; i++) {
    console.log(escapeCharacters[i]);
  }
}

console.log(addNewLineAfter(movie));
console.log(addTabBefore(movie));

logEscapeCharacters();

let lines = [
  'The caged bird sings',
  'with a fearful trill',
  'of things unknown',
  'but longed for still',
  'and his tune is heard',
  'on the distant hill',
  'for the caged bird',
  'sings of freedom.',
];
function makePoem(lines) {
  let poem = '';
  for (let l = 0; l < lines.length; l++) {
    poem += lines[l] + '\n';
  }
  poem = poem.slice(0, -1);
  return poem;
}
makePoem(lines); // => 'The caged bird sings\nwith a fearful trill\nof things unknown\nbut longed for still\nand his tune is heard\non the distant hill\nfor the caged bird\nsings of freedom.'
let birds = makePoem(lines);

let freedom =
  'The caged bird sings\\nwith a fearful trill\\nof things unknown\\nbut longed for still\\nand his tune is heard\\non the distant hill\\nfor the caged bird\\nsings of freedom.';

console.log(freedom);
console.log(birds);
console.log(birds === freedom);

// Template Literal  template string syntax to concatenate the strings.

const god = 'Jesus';

function greetPerson(name) {
  return `Hello, ${name}, it's great to meet you!`;
}

console.log(greetPerson(god));

let userInput = {
  name: 'Danielle Hammond',
  email: 'd.hammond@example.com',
};

console.log(userInput);

function formatUser(userInput) {
  let propertyNames = Object.getOwnPropertyNames(userInput);
  //console.log(propertyNames);

  let keyValue = '';
  for (let i = 0; i < propertyNames.length; i++) {
    let key = `${propertyNames[i]}`;
    let value = userInput[key];
    keyValue += `${key}: ${value}\n`;
  }
  keyValue = keyValue.slice(0, -1);
  return keyValue;
  // return `${key}: ${value}`;
  // return `${Object.getOwnPropertyNames(userInput)}: ${userInput.value}`;
}

console.log(formatUser(userInput));

function demonstrateSquaring(number) {
  return `${number} squared is ${number} times ${number}, which is ${
    number * number
  }.`;
}

console.log(demonstrateSquaring(4));
