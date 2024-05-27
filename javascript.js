const contentContainer = document.querySelector('.content-container');

const buttonRandomColor = document.querySelector('.button-random-color');
const buttonSpecificColor = document.querySelector('.button-specific-color');
// const buttonGradientColor = document.querySelector('.button-gradient-color');

contentContainer.style.width = '600px'
contentContainer.style.height = '600px'

let mode = 'specific';
let randomNumber = Math.floor(Math.random()*16777215).toString(16);
let randomColor = "#" + randomNumber;
let divMatrixElements = [];
let numberOfSqaresPerSide = 16; //default value

const buttonAsk = document.querySelector('.button-ask');

buildMatrix(); //default matrix

buttonRandomColor.addEventListener('click', () =>{
    mode = 'random';
});
buttonSpecificColor.addEventListener('click', () =>{
    mode = 'specific';
});

// buttonGradientColor.addEventListener('click', () =>{
//     mode = "gradient";
// });

function buildMatrix(){
    createMatrix();
    divMatrixElements = document.querySelectorAll('.div-matrix-element');
    addListenerOnHover();
    // if hoverEnable == TRUE => addListenerOnHover()
    // if clickEnable == TRUE => addListenerOnClick()
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
    if (isNaN(number)){
        alert("Please write only a number")
        return numberOfSqaresPerSide;
    }
    if (!Number.isInteger(number)) {
        alert("Please write an integer number")
        return numberOfSqaresPerSide;
    }
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
    // console.log(divMatrixElements);
    divMatrixElements.forEach((divMatrixElement) => {
        contentContainer.removeChild(divMatrixElement)  
    });
}

// function generateRandomColor(){
    
// }

function addListenerOnHover() {
    divMatrixElements.forEach((divMatrixElement) => {
        divMatrixElement.addEventListener('mouseover', () => {
            if (mode === "random") {
                randomNumber = Math.floor(Math.random()*16777215).toString(16);
                randomColor = "#" + randomNumber;
                // console.log(randomColor);
                divMatrixElement.style.backgroundColor = randomColor;
            }
            if (mode === "specific"){ 
                divMatrixElement.style.backgroundColor = randomColor;
            }            
            
        })  
    });
}

//TODO: modes
// [NOT STARTED] click mode: click on each button so the color will change
// [DONE] hover mode: hover on each button so the color will change 
// [DONE] random color 
// [NOT STARTED] pick a color
// [NOT STARTED] gradient

// });
