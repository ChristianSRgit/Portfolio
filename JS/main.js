

let bannerDashboard = document.getElementById('bannerDashboard');
let navDir = document.getElementById('navDir');
let DLMode = document.getElementById('DLMode')
let body = document.getElementById('body')
let skillsBanner = document.getElementById('skillsBanner')




// show/hide dropdown
bannerDashboard.addEventListener('click',() => {
    navDir.classList.toggle("hide");
    DLMode.classList.toggle("hide");
    bannerDashboard.classList.toggle('fixBorder');
})


document.addEventListener('scroll',bannerMove);


let scrollBefore = window.scrollY;

function bannerMove(){
    

    window.onscroll = function(e){
        if(scrollBefore < window.scrollY){
            console.log("down");
            skillsBanner.classList.remove('movingLeft');
            skillsBanner.classList.add('movingRight');

        }else{
            console.log("up")
            skillsBanner.classList.remove('movingRight');
            skillsBanner.classList.add('movingLeft');
        }
        scrollBefore = window.scrollY;
    }
    
}


//Change about leng




//random letters h1
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

function generateRandomLetters(target, value) {
  let iteration = 0;
  const interval = setInterval(() => {
    target.innerText = target.innerText.split("").map((letter, index) => {
      if (index < iteration) {
        return value[index];
      }
      return letters[Math.floor(Math.random() * 26)];
    }).join("");

    if (iteration >= value.length) {
      clearInterval(interval);
    }

    iteration += 1 / 3;
  }, 30);
}

setTimeout(() => {
  const csElement = document.getElementById("cs");
  const frontElement = document.getElementById("front");
  const ramundoElement = document.getElementById("ramundo");
  const developerElement = document.getElementById("developer");

  generateRandomLetters(csElement, csElement.dataset.value);

  setTimeout(() => {
    generateRandomLetters(ramundoElement, ramundoElement.dataset.value);

    setTimeout(() => {
      generateRandomLetters(frontElement, frontElement.dataset.value);

      setTimeout(() => {
        generateRandomLetters(developerElement, developerElement.dataset.value);
      }, 700);

    }, 700);

  }, 700); 

}, 600); // initial timeout

console.log("Hey, you made it all the way here! Something caught your attention, right? Well, guess what? We're still working on some amazing things behind the scenes. Stay tuned for up updates!");

