const DEFAULT_COLOR = '#000000';
const DEFAULT_SIZE = 16;

let current_color = DEFAULT_COLOR;
let current_size = DEFAULT_SIZE;
let current_mode = 'NORMAL';


const grid = document.getElementById('grid');
const reset = document.querySelector('#reset');
const slider = document.getElementById('myRange');
const rainbow = document.getElementById('rainbow');
const displaySize = document.getElementById('displaySize');

displaySize.textContent = current_size + "X" + current_size;
reset.addEventListener('click', reset_grid);
slider.addEventListener('change', sizeof_grid);
rainbow.addEventListener('click',rainbow_color);

function reset_grid(){
    grid.innerHTML='';
    current_mode ='NORMAL';
    create_grid(current_size);
}
function rainbow_color(){
    current_mode = 'RAINBOW';
}


function colorchange(e){
    if (current_mode === 'NORMAL'){
        e.target.style.backgroundColor=current_color;
    }else if (current_mode === 'RAINBOW'){
        let R = Math.floor(Math.random() * 256);
        let G = Math.floor(Math.random() * 256);
        let B = Math.floor(Math.random() * 256);
        e.target.style.backgroundColor=`rgb(${R},${G},${B})`;
    }  
}

function sizeof_grid(e){
    document.getElementById('displaySize').textContent = current_size + "x" + current_size;
    current_size = e.target.value;
    reset_grid();
}

function create_grid(gridSize){
    displaySize.textContent = gridSize + "X" + gridSize;
    grid.style.gridTemplateColumns = `repeat(${gridSize},1fr)`;
    grid.style.gridTemplateRows = `repeat(${gridSize},1fr)`;    
    for(let i = 0; i<gridSize * gridSize; i++){
        const gridElement = document.createElement('div');
        gridElement.style.border = 
        grid.appendChild(gridElement);
        gridElement.addEventListener('mouseenter', colorchange);
    }
}
create_grid(current_size);