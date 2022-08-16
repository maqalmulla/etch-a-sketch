let createGrid = (size = 16) => {
    let parentContainer = document.querySelector('.container')
    for(let i = 0; i < size; i++){
        let row = document.createElement('div')
        row.classList.add('row')
        for(let i = 0; i < size; i++){
            let square = document.createElement('div')
            square.classList.add('square')
            row.appendChild(square)
        }
        parentContainer.append(row)
    }
}

let deleteGrid = () => {
    let parentContainer = document.querySelector('.container')
    parentContainer.innerHTML = ''
}

createGrid()
let squares = document.getElementsByClassName('square')
for(let i = 0; i < squares.length; i++){
    squares[i].addEventListener('mouseover', () => {
        squares[i].classList.add('hovering')
    })
    squares[i].addEventListener('mouseout', () => {
        squares[i].classList.remove('hovering')
    })
}

let button = document.querySelector('.new_grid')
button.addEventListener('click', () => {
    let newSize = prompt('How big would you want your new grid to be?')
    newSize = parseInt(newSize)
    if(newSize > 100){
        alert('Nope! Gotta be smaller than a 100')
        return;
    }else{
        deleteGrid()
        createGrid(newSize)
    }
})
