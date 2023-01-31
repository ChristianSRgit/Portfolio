

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
