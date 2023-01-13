// cardholder name
let nameCard = document.querySelector('.card__details--name');
let nameInput = document.querySelector('#cardholder');
let nameErrorDiv = document.querySelector('.form__cardholder--error');

// Ingreso dinamico del nombre
nameInput.addEventListener('input', ()=>{
    if(nameInput.value == ''){
        nameCard.innerText = 'Jane Appleseed';
    }else{
        nameCard.innerText = nameInput.value;
    }

})

// Card Number
let numberCard = document.querySelector('.card__number');
let numberInput = document.querySelector('#cardnumber');
let numberErrorDiv = document.querySelector('.form__inputnumber--error');

// ingreso dinamico del numero 
numberInput.addEventListener('input', (event)=>{
    let inputValue = event.target.value;
    // actualizacion de tarjeta
    numberCard.innerText = numberInput.value; 
    // mostrando ceros por defectos input vacio
    if(numberInput.value == ''){
        numberCard.innerText = '0000 0000 0000 0000';
    }
    // validacion que no exista letra con expresion regular.
    let regExt = /[A-z]/g;
    if(regExt.test(numberInput.value)){
      showError(numberInput,numberErrorDiv,'wrong format, numbers only');
    }else{
        // sustituir los espacio con estring vacios y agregar un espacio al 5 caracter y eliminar el ultimo espacio con el metodo trim.
        numberInput.value = inputValue.replace(/\s/g,'').replace(/([0-9]{4})/g,'$1 ').trim();
     hideError(numberInput,numberErrorDiv);

    };
})
// funciones para mostrar el error  y ocultarlo.
function showError(divInput, divError, msgError){
    divError.innerText = msgError;
    divInput.style.borderColor = '#FF0000';
}
function hideError(divInput, divError){
    divError.innerText = '';
    divInput.style.borderColor = ' hsl(270, 3%, 87%)';

}

function verifyIsFilled(divInput,divError){
    if(divInput.value.length>0){
        hideError(divInput,divError,'');
    }else{
        showError(divInput,divError,"Can be Blank");
        
    }
}

 function validateLetters(input,divError){
    let regExt = /[A-z]/g;
    if(regExt.test(input.value)){
      showError(input,divError,'wrong format, numbers only');
    }else{  
        hideError(input,divError,'');
    }
}
//MM
let monthCard = document.querySelector('.card__month');
let monthInput = document.querySelector('#cardMonth');
let monthErrorDiv = document.querySelector('.form__input-mm--error');

//Ingreso dinamico del mes
monthInput.addEventListener('input', ()=>{
  
    monthCard.innerText = monthInput.value;
    validateLetters(monthInput,monthErrorDiv);
 })
// YEAR
let yearCard = document.querySelector('.card__year');
let yearInput = document.querySelector('#cardYear');
let yearErrorDiv = document.querySelector('.form__input-yy--error');
 //Ingreso dinamico del year
yearInput.addEventListener('input', ()=>{
  
    yearCard.innerText = yearInput.value;
    validateLetters(yearInput,yearErrorDiv);
 })

 //CVC
 let cvcCard = document.querySelector('.card-back__cvc');
 let cvcInput= document.querySelector('#cardCVC');
 let cvcErrorDiv = document.querySelector('.form__input-cvc--error');
//ingreso dinamico cvc
 cvcInput.addEventListener('input', ()=>{
    cvcCard.innerText = cvcInput.value;
    validateLetters(cvcInput,cvcErrorDiv);
 })

//submit
let confirmBtn = document.querySelector('.form__submit');
let nameValidation = false;
let numberValidation = false;
let monthValidation = false;
let yearValidation = false;
let cvcValidation = false;

//sections
let form = document.querySelector('.form');
let thanks = document.querySelector('.thanks-section');

confirmBtn.addEventListener('click', (event)=>{
    event.preventDefault();
    //validar name vacio
   
    if( !verifyIsFilled(nameInput,nameErrorDiv)){
        nameValidation = true;
    }else{
        nameValidation = false;
    }

    //validar numero
    verifyIsFilled(numberInput,numberErrorDiv);
        
        if(numberInput.value.length == 19){
        hideError(numberInput,numberErrorDiv,'');
         numberValidation = true; 
     }else{
        showError(numberInput,numberErrorDiv,'Wrong Number');
        numberValidation = false;
     };

    
    // validar mes
    verifyIsFilled(monthInput,monthErrorDiv);
        if(parseInt(monthInput.value) > 0 && parseInt(monthInput.value) <=12){
            hideError(monthInput,monthErrorDiv,'');
            monthValidation = true;
        }else{
            showError(monthInput,monthErrorDiv,'Wrong Month');
            monthValidation = false;
        };
  
    //validar year
    verifyIsFilled(yearInput,yearErrorDiv);

        if(parseInt(yearInput.value) > 22 && parseInt(yearInput.value) <=27){
            hideError(yearInput,yearErrorDiv,'');
            yearValidation = true;
        }else{
         showError(yearInput,yearErrorDiv,'Wrong Year');
         yearValidation = false;
        }
    
  

    //validar cvc
    verifyIsFilled(cvcInput,cvcErrorDiv);
        if(cvcInput.value.length == 3) {
            hideError(cvcInput,cvcErrorDiv,'');
            cvcValidation = true;
        }else{
         showError(cvcInput,cvcErrorDiv,'Wrong CVC');
             cvcValidation = false;
        };
  

  if(nameValidation == true && numberValidation == true && monthValidation == true && yearValidation == true && cvcValidation == true ){
    form.style.display = ' none';
    thanks.style.diplay = 'block';
  }
   

});


