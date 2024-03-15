const contentContainer = document.querySelector('.content-container');

for(let i = 0; i < 16; i++) {
    for(let j = 0; j < 16; j++){
        var div = document.createElement('div');
        div.setAttribute('class','div-matrix-element')
        div.textContent = `${i}${j}`;
        contentContainer.appendChild(div); 
        
    };  
};



const divMatrixElements = document.querySelectorAll('.div-matrix-element');
divMatrixElements.forEach((divMatrixElement) => {
    divMatrixElement.addEventListener('mouseover', () => {
        divMatrixElement.style.cssText='background-color: white';
    })  
});