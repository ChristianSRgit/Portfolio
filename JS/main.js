

let bannerDashboard = document.getElementById('bannerDashboard');
let navDir = document.getElementById('navDir');
let DLMode = document.getElementById('DLMode')
let body = document.getElementById('body')
const wrapper = document.getElementById('tiles')




// show/hide dropdown
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


/* crear grid con js
const createTile = index => {
    const tile = document.createElement('div');

    tile.classList.add('tile');

    return tile;
}

const createTiles = quantity => {
     Array.from(Array(quantity)).map((tile, index) => {
        wrapper.appendChild(createTile(index));
     })
}


const createGrid = () => {
    wrapper.innerHTML = '';
    let columns = Math.floor(document.body.clientWidth / 50);
    let rows = Math.floor(document.body.clientHeight / 50);

    createTiles(columns * rows);
}

createGrid();
window.onresize = () => createGrid();

*/
