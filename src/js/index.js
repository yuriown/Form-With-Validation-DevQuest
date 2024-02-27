const form = document.getElementById('form')
const name = document.getElementById('name')
const email = document.getElementById('email')
const phone = document.getElementById('phone')
const msg = document.getElementById('msg')

form.addEventListener('submit', (e) =>{
    e.preventDefault();

    checkInputs();
});

function checkInputs(){
    const nameValue = name.value;
    const emailValue = email.value;
    const phoneValue = phone.value;
    const msgValue = msg.value;

    if(nameValue === ''){
        setErrorFor(name)
    } else {
        setSucessFor(name)
    }

    if(emailValue === ''){
        setErrorFor(email)
    } else {
        setSucessFor(email)
    }

    if(phoneValue === ''){
        setErrorFor(phone)
    } else {
        setSucessFor(phone)
    }

    if(msgValue === ''){
        setErrorForMsg(msg)
    } else {
        setSucessForMsg(msg)
    }
}

function setErrorFor(input, message){
    const textBox = input.parentElement;
    const small = textBox.querySelector('small');

    //Add error class
    textBox.className = "text-box error"
}

function setErrorForMsg(input, message){
    const textBox = input.parentElement;
    const small = textBox.querySelector('small');

    //Add error class
    textBox.className = "text-box msg error"
}

function setSucessFor(input){
    const textBox = input.parentElement;

    // Add sucess class
    textBox.className = "text-box sucess";
}

function setSucessForMsg(input){
    const textBox = input.parentElement;

    // Add sucess class
    textBox.className = "text-box msg sucess";
}