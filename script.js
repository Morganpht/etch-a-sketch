/*Populate grid */
const container = document.querySelector('#container');

function makeGrid () {

    if (container.firstChild) {
        removeCells(container);
    }

    let size = window.prompt('Grid resolution (max 100): ')

    if (parseInt(size) <= 100) {
        container.style.cssText = `grid-template-rows: repeat(${size}, 1fr)`;
        container.style.cssText = `grid-template-columns: repeat(${size}, 1fr)`;
        for (i = 0; i < size*size; i++) {
            const cell = document.createElement('div');
            cell.style.cssText = 'opacity: 0.1';
            container.appendChild(cell).className = 'grid-item'
        }
        const cells = document.querySelectorAll('.grid-item');
        cells.forEach(cell => cell.addEventListener('mouseover', changeColor));
    } else {
        alert("Please enter a number less than or equal to 100.")
        makeGrid();
    }
    
}


makeGrid();

/*change color of cells when mouseover */
function changeColor (e) {
    red = Math.floor((Math.random() * 250));
    green = Math.floor((Math.random() * 250));
    blue = Math.floor((Math.random() * 250));
    e.target.style.background = `rgb(${red}, ${green}, ${blue})`;
    
    e.target.style.opacity = (parseFloat(e.target.style.opacity) + 0.1);
    console.log(e.target.style.opacity);
}

/*Button functionality */
const button = document.querySelector('button');
button.addEventListener('click', makeGrid);


/*Removes all children (i.e. cells from grid)*/
function removeCells(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}