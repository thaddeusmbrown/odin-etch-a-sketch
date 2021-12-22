//reset button and frame placement
const button = document.createElement('button');
button.textContent = "Reset";
document.body.append(button);
let divOuterContainer = document.createElement('div'); //create outer container that will hold a column of inner containers
divOuterContainer.classList.add('outer');


//initiate etch-a-sketch of Size 16 to start
for (let i = 0; i < 16; i++) {
    const divInnerContainer = document.createElement('div'); //create inner container that will hold a row of divs that make up the grid
    divInnerContainer.classList.add('inner');
    for (let j = 0; j < 16; j++) {
        const div = document.createElement('div'); //create grid divs that go across each row
        div.classList.add('grid');
        divInnerContainer.appendChild(div);
    }
    divOuterContainer.appendChild(divInnerContainer);
}
document.body.append(divOuterContainer);

//change color of grid divs that are moused over
let grid = document.querySelectorAll('.grid');
grid.forEach(div => div.addEventListener('mouseover', fill));

function fill() {
    let opacity = +window.getComputedStyle(this).getPropertyValue("opacity");
    let color = window.getComputedStyle(this).getPropertyValue(
        "background-color");
    if (color == 'rgb(255, 255, 255)') { //change from white to light gray if unfilled
        this.style['background-color'] = 'rgb(0,0,0)';
        this.style.opacity = 0.1;
    } else if (opacity < 1) { //increment opacity a little each mouseover
        this.style.opacity = opacity + 0.1;
    }
}

button.addEventListener('click', resetGrid);

function resetGrid() {
    let newSize = prompt("Please select new grid size (Max 100)", 16);
    if (newSize > 100) newSize = prompt("Please select new grid size (Max 100)",
        16);
    divOuterContainer.remove();
    divOuterContainer = document.createElement('div'); //create outer container that will hold a column of inner containers
    divOuterContainer.classList.add('outer');
    for (let i = 0; i < newSize; i++) { //size is set by prompt now
        const divInnerContainer = document.createElement('div'); //create inner container that will hold a row of divs that make up the grid
        divInnerContainer.classList.add('inner');
        divInnerContainer.style.height = 960 / newSize;
        for (let j = 0; j < newSize; j++) {
            const div = document.createElement('div'); //create grid divs
            div.classList.add('grid');
            div.style.height = 960 / newSize;
            divInnerContainer.appendChild(div);
        }
        divOuterContainer.appendChild(divInnerContainer);
    }
    document.body.append(divOuterContainer);

    grid = document.querySelectorAll('.grid');
    grid.forEach(div => div.addEventListener('mouseover', fill));
}