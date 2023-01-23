

let body = document.getElementById('body')
const wrapper = document.getElementById('tiles')



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