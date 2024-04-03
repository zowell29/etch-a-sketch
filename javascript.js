const contentContainer = document.querySelector('.content-container');
contentContainer.style.width = '600px'
contentContainer.style.height = '600px'

let divMatrixElements = [];
let numberOfSqaresPerSide = 16; //default value
const buttonAsk = document.querySelector('.button-ask');

buildMatrix(); //default matrix

function buildMatrix(){
    createMatrix();
    divMatrixElements = document.querySelectorAll('.div-matrix-element');
    addListenerOnHover();
}

buttonAsk.addEventListener('click', () => {
    divMatrixElements = document.querySelectorAll('.div-matrix-element');
    numberOfSqaresPerSide = getNumberFromPrompt();
    deleteOldMatrix();
    buildMatrix();

})

function getNumberFromPrompt() {
    let answear = prompt("Please write here the number of sqares per side", "");
    let number = Number(answear);
    if (number > 100) {
        alert("Please write a number smaller than 100")
        return numberOfSqaresPerSide;
    } else {
        return number;
    } 
}

function createMatrix() {
    for(let i = 0; i < numberOfSqaresPerSide; i++) {
        for(let j = 0; j < numberOfSqaresPerSide; j++){
            var div = document.createElement('div');
            div.setAttribute('class','div-matrix-element')
            // div.textContent = `${i}${j}`;
            contentContainer.appendChild(div); 
            div.style.display ='flex';
            div.style.flexWrap='wrap';
            div.style.textAlign= 'center';
            div.style.backgroundColor = 'rgb(114, 114, 209)'
            div.style.width = ((parseInt(contentContainer.style.width, 10) - 2)/numberOfSqaresPerSide) +'px';
            div.style.height = ((parseInt(contentContainer.style.height, 10) - 2) /numberOfSqaresPerSide) +'px';          
        };  
    };
}

function deleteOldMatrix() {
    console.log(divMatrixElements);
    divMatrixElements.forEach((divMatrixElement) => {
        contentContainer.removeChild(divMatrixElement)  
    });
}

function addListenerOnHover() {
    divMatrixElements.forEach((divMatrixElement) => {
        divMatrixElement.addEventListener('mouseover', () => {
            let randomNumber = Math.floor(Math.random()*16777215).toString(16);
            let randomColor = "#" + randomNumber;
            // console.log(randomColor);
            divMatrixElement.style.backgroundColor = randomColor;
        })  
    });
}

