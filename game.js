//---------------------const items------------------------
let introPrompt = document.querySelector('.welcome');

const welcomePrompt = document.querySelector('.welcome-prompt');

const welcomeButton = document.getElementById('welcome');

const introDiv = document.querySelector('.intro');

const startGameButton = document.getElementById('startGame');

// const timerInterval = setInterval(manageTimer, 1000);

const ghost = [];

let damage = -10;
let timer = 90;


// -----------------------ghosts class-----------------------------------------------

class Ghost {
  constructor ( x, y, speed, health) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.health = health;
  }
  
  move() {
    this.x += this.speed;
  }
  
  takeDamage() {
    this.health -= damage
    if(this.health <= 0) {
    console.log("ghost defeated!");
    }
  }
  
}

//---------intro prompts and "welcome" "begin" buttons event listeners ----------------

welcomePrompt.style.display ="none";

welcomeButton.addEventListener('click', clickOutcome);
startGameButton.addEventListener('click', startGame);

//-----------------functions-----------------

function clickOutcome() {
  welcomePrompt.style.display = "block";
  const noDiv = introDiv.style.display = "none";
  
};

//-------------test spawnGhost function--------------------------

function spawnGhosts() {
  
  const numberOfGhosts = 5;
  let ghostCount = 0;
  const blueGhost = document.createElement("div");
  blueGhost.className = "blueGhost";

  const spawnInterval = setInterval(() => {
  const spawnSide = Math.random() < 0.5 ? "left" : "right";
    let spawnX, spawnY;

    if (spawnSide === "left") {
      spawnX = -blueGhost.offsetWidth;
      spawnY = Math.random() * window.innerHeight;
    } else {
      spawnX = window.innerWidth;
      spawnY = Math.random() * window.innerHeight;
    }
    
     document.body.appendChild(blueGhost);
    
    setTimeout( () => {
      blueGhost.style.transform = "translate(10,0)";
    }, 100);

    blueGhost.style.left = spawnX + "px";
    blueGhost.style.top = spawnY + "px";

    blueGhost.style.display = "block";

    ghostCount++;

    if (ghostCount >= numberOfGhosts) {
      clearInterval(spawnInterval);
    }
  }, 2000); 
}













