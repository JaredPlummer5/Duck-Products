'use strict';


let DuckContainer = document.querySelector('section');
let resultButton = document.querySelector('section + div');
let image1 = document.querySelector('section img:first-child');
let image2 = document.querySelector('section img:nth-child(2)');
let image3 = document.querySelector('section img:nth-child(3)');

let clicks = 0;
let maxClicksAllowed = 25;

// State object holds the holds the current state of the application (all existing Goats)
const state = {
  allDuckProductsArray: [],
};


function Duck(name, src) {
  this.name = name;
  this.src = src;
  this.views = 0;
  this.clicks = 0;
}

function getRandomNumber() {
  return Math.floor(Math.random() * state.allDuckProductsArray.length);
}

function renderDucks() {
  // call the getRandomNumber
  let DuckProduct1 = getRandomNumber();
  let DuckProduct2 = getRandomNumber();
  let DuckProduct3 = getRandomNumber();

  while (DuckProduct1 === DuckProduct2 || DuckProduct3 === DuckProduct2 || DuckProduct3 ===  DuckProduct1) {
    DuckProduct1 = getRandomNumber();
    DuckProduct2 = getRandomNumber();
    DuckProduct3 = getRandomNumber();
  }
  image1.src = state.allDuckProductsArray[DuckProduct1].src;
  image2.src = state.allDuckProductsArray[DuckProduct2].src;
  image3.src = state.allDuckProductsArray[DuckProduct3].src;

  image1.alt = state.allDuckProductsArray[DuckProduct1].name;
  image2.alt = state.allDuckProductsArray[DuckProduct2].name;
  image3.alt = state.allDuckProductsArray[DuckProduct3].name;

  state.allDuckProductsArray[DuckProduct1].views++;
  state.allDuckProductsArray[DuckProduct2].views++;
  state.allDuckProductsArray[DuckProduct3].views++;
}

function handleDuckClick(event) {
  if (event.target === DuckContainer) {
    alert('Please click on an image');
  }
  clicks++;
  let ClickDuckProduct = event.target.alt;
  for (let i = 0; i < state.allDuckProductsArray.length; i++) {
    if (ClickDuckProduct === state.allDuckProductsArray[i].name) {
      state.allDuckProductsArray[i].clicks++;
      break;
    }
  }
  if (clicks === maxClicksAllowed) {
    DuckContainer.removeEventListener('click', handleDuckClick);
    // give the button an event lister and styles so the user
    // knows its an active button:
    resultButton.addEventListener('click', renderResults);
    resultButton.className = 'clicks-allowed';
    DuckContainer.className = 'no-voting';
  } else {
    renderDucks();
  }
}

function renderResults() {
  let ul = document.querySelector('ul');
  for (let i = 0; i < state.allDuckProductsArray.length; i++) {
    let li = document.createElement('li')
    li.textContent = `${state.allDuckProductsArray[i].name} had ${state.allDuckProductsArray[i].views} view and was clicked  ${state.allDuckProductsArray[i].clicks} times.`;
    ul.appendChild(li);
  }
}

// executable code
let bag = new Duck('Duck Bag', './assets/bag.jpg');
let banana = new Duck('banana', './assets/banana.jpg');
let bathroom = new Duck('bathroom', './assets/bathroom.jpg');
let boots = new Duck('boots', './assets/boots.jpg');
let breakfast = new Duck('breakfast', './assets/breakfast.jpg');
let bubblegum = new Duck('Smiling Duck', './assets/bubblegum.jpg');
let chair = new Duck('chair', './assets/chair.jpg');
let cthulhu = new Duck('cthulhu', './assets/cthulhu.jpg');
let dogduck = new Duck('dog duck', './assets/dog-duck.jpg');
let dragon = new Duck('dragon', './assets/dragon.jpg');
let pen = new Duck('pen', './assets/pen.jpg');
let petsweep = new Duck('pet sweep', './assets/pet-sweep.jpg');
let scissors = new Duck('Sweater Duck', './assets/scissors.jpg');
let shark = new Duck('shark', './assets/shark.jpg');
let sweep = new Duck('sweep', './assets/sweep.png');
let tauntaun = new Duck('tauntaun', './assets/tauntaun.jpg');
let unicorn = new Duck('unicorn', './assets/unicorn.jpg');
let watercan = new Duck('water can.', './assets/water-can.jpg');
let wineglass = new Duck('wine glass', './assets/wine-glass.jpg');

state.allDuckProductsArray.push(bag, banana, bathroom, boots, breakfast, bubblegum, chair, cthulhu, dogduck, dragon, pen, petsweep, scissors, shark, sweep, tauntaun, unicorn, watercan, wineglass);

renderDucks();

DuckContainer.addEventListener('click', handleDuckClick);
//use the images array to work with the loaded images

    
    



    //use the images array to work with the loaded images