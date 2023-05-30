let navDir = document.getElementById('navDir');
let DLMode = document.getElementById('DLMode')
let body = document.getElementById('body')
let skillsBanner = document.getElementById('skillsBanner')




let bannerDashboard = document.getElementById('bannerDashboard');
// show/hide dropdown
bannerDashboard.addEventListener('click', () => {
  navDir.classList.toggle("hide");
  DLMode.classList.toggle("hide");
  bannerDashboard.classList.toggle('fixBorder');
})


document.addEventListener('scroll', bannerMove);


let scrollBefore = window.scrollY;

function bannerMove() {


  window.onscroll = function (e) {
    if (scrollBefore < window.scrollY) {
      console.log("down");
      skillsBanner.classList.remove('movingLeft');
      skillsBanner.classList.add('movingRight');

    } else {
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

//Dark & Light Mode

// Obtén referencias a los inputs
const LStyleMode = document.getElementById('LStyleMode');
const DStyleMode = document.getElementById('DStyleMode');

// Agrega eventos para cambiar los fondos

//          LIGHTMODE

LStyleMode.addEventListener('change', function () {
  if (LStyleMode.checked) {

    // Establecer fondo light mode
    document.body.classList.add('light-mode');
    document.body.classList.remove('dark-mode');

    // change all de h tag's color
    let e = 0;
    for (e; e <= 5; e++) {
      const h1Elements = document.getElementsByTagName(`h${e}`);
      for (let i = 0; i < h1Elements.length; i++) {
        h1Elements[i].style.color = "#1f1f1f";
      }
    }
    //contact icon
    const linkedinIcon = document.getElementById('linkedinIcon');
    const githubIcon = document.getElementById('githubIcon');
    const gmailIcon = document.getElementById('gmailIcon');


    linkedinIcon.setAttribute('fill', '#1f1f1f');
    githubIcon.setAttribute('fill', '#1f1f1f');
    gmailIcon.setAttribute('fill', '#1f1f1f');
  } else {
    // Establecer fondo por defecto
    document.body.classList.remove('light-mode');
  }
});


//          DARKMODE

DStyleMode.addEventListener('change', function () {
  if (DStyleMode.checked) {

    // Establecer fondo dark mode
    document.body.classList.add('dark-mode');
    document.body.classList.remove('light-mode');

    // change all de h tag's color
    let e = 0;
    for (e; e <= 5; e++) {
      const h1Elements = document.getElementsByTagName(`h${e}`);
      for (let i = 0; i < h1Elements.length; i++) {
        h1Elements[i].style.color = "#f2e8de";
      }
    }

    //contact icon
    const linkedinIcon = document.getElementById('linkedinIcon');
    const githubIcon = document.getElementById('githubIcon');
    const gmailIcon = document.getElementById('gmailIcon');


    linkedinIcon.setAttribute('fill', '#f2e8de');
    githubIcon.setAttribute('fill', '#f2e8de');
    gmailIcon.setAttribute('fill', '#f2e8de');



  } else {
    // defaul background
    document.body.classList.remove('dark-mode');
  }
});