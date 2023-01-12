

let bannerDashboard = document.getElementById('bannerDashboard');
let navDir = document.getElementById('navDir');
let DLMode = document.getElementById('DLMode')
let body = document.getElementById('body')


bannerDashboard.addEventListener('click',() => {
    navDir.classList.toggle("hide");
    DLMode.classList.toggle("hide");
    bannerDashboard.classList.toggle('fixBorder');
})


document.addEventListener('scroll',bannerMove);



function bannerMove(){
    let scrollBefore = 0;
    let lastScrollPos = 0;

    lastScrollPos = Math.round(window.scrollY)
    console.log(lastScrollPos)
    
    if(lastScrollPos > scrollBefore){
        console.log('down')
        scrollBefore = lastScrollPos;
    }else{
        console.log('up')
        scrollBefore = lastScrollPos;

    }
}