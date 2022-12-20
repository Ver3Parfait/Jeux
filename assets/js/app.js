let board = document.querySelector("#board");
let scoreShow = document.querySelector('#score');
let bestcoreShow = document.querySelector('#bestScore');
let time = document.querySelector('#time');
let score = 0;
let bestcore = 0;
let minutes = 0;
let seconde = 0;
let squareNumbers;
let square;
let tableBoard;
let random
let interval;
let colorNumber;
let colorNumber2;
let color = '#';
let color2 = '#';
let found;


function randomColor() {
    for (let i = 0; i < 6; i++) {
        colorNumber = Math.floor(Math.random() * 9) 
        color = color + colorNumber
    }
    return color
}

function randomColor2() {
    for (let i = 0; i < 6; i++) {
        colorNumber2 = Math.floor(Math.random() * 9) 
        color2 = color2 + colorNumber2
    }
    return color2
}

function timer() {
    seconde-- 
    time.innerHTML = seconde;
    if (time.innerHTML == '0') {
        stopInterval()
        minutes = 0;
        time.innerHTML = 0;
        board.innerHTML = ''
        let loose = document.createElement('div');
        loose.setAttribute('class', 'loose')
        loose.innerHTML = 'Temps ecouler !'
        board.appendChild(loose)
        if (score >= bestcore) {
            bestcore = score
            score = 0
            bestcoreShow.textContent = bestcore
            scoreShow.textContent = score
          }
      }
}

function stopInterval() {
    clearInterval(interval)
}

const CreateBoard = () => {
    randomColor()
  for (let i = 0; i < squareNumbers; i++) {
    square = document.createElement("div");
    square.setAttribute("class", "square");
    square.setAttribute("onclick", "select(this)");
    square.setAttribute("style", `background-color:${color}`)
    board.appendChild(square);
  }
  minutes = document.querySelector('.Dificulty').value;
  seconde = minutes * 60;
 interval = setInterval(timer, 1000)
};

function changeColor() {

    minutes = 0;
    time.innerHTML = 0;
    board.innerHTML = ''
    if (score >= bestcore) {
        bestcore = score
        score = 0
        bestcoreShow.textContent = bestcore
        scoreShow.textContent = score
      }
    squareNumbers = document.querySelector(".squareNumbersDificulty").value;
    CreateBoard();
    randomColor2();
    random = Math.floor(Math.random() * squareNumbers);
  tableBoard = [...document.getElementsByClassName("square")];
  tableBoard[random].setAttribute('style', `background-color:${color2};`)
  tableBoard[random].setAttribute('id', 'colorFound');
  
}

function select(elem) {
randomColor() 
randomColor2()   
    found = document.querySelector('#colorFound')
    tableBoard = [...document.getElementsByClassName("square")];
    if (elem.style.backgroundColor == found.style.backgroundColor) {
        score++
        scoreShow.textContent = score
        console.log(score);
        elem.removeAttribute('id')
        for (let i = 0; i < tableBoard.length; i++) {
            tableBoard[i].setAttribute('style', `background-color:${color}`)
            
        }
        random = Math.floor(Math.random() * squareNumbers);
            tableBoard[random].setAttribute('style', `background-color:${color2};`);
            tableBoard[random].setAttribute('id', 'colorFound');
    }
    color = '#';
    color2 = '#';
}

function reload() {
    seconde = 0;
    time.innerHTML = 0;
    stopInterval()
    board.innerHTML = ''
    for (let i = 0; i < squareNumbers; i++) {
        square = document.createElement("div");
        square.setAttribute("class", "square");
        square.setAttribute("onclick", "select(this)");
        board.appendChild(square);
      }
      if (score >= bestcore) {
        bestcore = score
        score = 0
        bestcoreShow.textContent = bestcore
        scoreShow.textContent = score
      }
}




