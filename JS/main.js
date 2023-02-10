

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




//random letters h1
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

document.getElementById("cs").onmouseover = event => {

    let interval = null;
    let iteration = 0;
    clearInterval(interval);

    interval = setInterval(() => {
    event.target.innerText = event.target.innerText.split("")
    .map((letter, index) => {
        if(index < iteration){
            return event.target.dataset.value[index]
        }
        return letters[Math.floor(Math.random() * 26)]
    })
        .join("");

        if(iteration >= event.target.dataset.value.lenght){

        clearInterval(interval);

        }
        iteration += 1 / 3;

        },60);
}

document.getElementById("front").onmouseover = event => {

    let interval = null;
    let iteration = 0;
    clearInterval(interval);

    interval = setInterval(() => {
    event.target.innerText = event.target.innerText.split("")
    .map((letter, index) => {
        if(index < iteration){
            return event.target.dataset.value[index]
        }
        return letters[Math.floor(Math.random() * 26)]
    })
        .join("");

        if(iteration >= event.target.dataset.value.lenght){

        clearInterval(interval);

        }
        iteration += 1 / 3;

        },30);
}

document.getElementById("ramundo").onmouseover = event => {

    let interval = null;
    let iteration = 0;
    clearInterval(interval);

    interval = setInterval(() => {
    event.target.innerText = event.target.innerText.split("")
    .map((letter, index) => {
        if(index < iteration){
            return event.target.dataset.value[index]
        }
        return letters[Math.floor(Math.random() * 26)]
    })
        .join("");

        if(iteration >= event.target.dataset.value.lenght){

        clearInterval(interval);

        }
        iteration += 1 / 3;

        },30);
}

document.getElementById("developer").onmouseover = event => {

    let interval = null;
    let iteration = 0;
    clearInterval(interval);

    interval = setInterval(() => {
    event.target.innerText = event.target.innerText.split("")
    .map((letter, index) => {
        if(index < iteration){
            return event.target.dataset.value[index]
        }
        return letters[Math.floor(Math.random() * 26)]
    })
        .join("");

        if(iteration >= event.target.dataset.value.lenght){

        clearInterval(interval);

        }
        iteration += 1 / 3;

        },30);
}