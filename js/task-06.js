////TODO
let validInput = document.querySelector('#validation-input');




validInput.addEventListener("blur", () => {
    let dataLength = validInput.getAttribute('data-length');
    let textLength = validInput.value.length;
    
    if(dataLength === textLength) {
        validInput.classList.remove('invalid'); 
        validInput.classList.add('valid');
    }else{
    validInput.classList.remove('valid');
    validInput.classList.add('invalid');

    console.log(textLength);
    console.log(dataLength);
    
}
});
