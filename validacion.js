const form =document.getElementById('form__contact__info');
const inputs = document.querySelectorAll('#form__contact__info input')
const textarea = document.getElementById("message");
const btn = document.getElementById("btn__submit");

const expresiones = {
	name: /^[a-zA-ZÀ-ÿ0-9\s]{1,50}$/, // Letras y espacios, pueden llevar acentos.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	affair: /^[a-zA-ZÀ-ÿ0-9\s]{1,55}$/, 
    message: /^[a-zA-ZÀ-ÿ0-9\s]{10,300}$/
}

const campos = {
    name: false,
    email: false, 
    affair: false,
    message: false
}

const validarFormulario = (e) => {
    switch (e.target.name) { 
        case "name": //nombre del name dentro del input
           validarCampo(expresiones.name, e.target, 'name');
        break;

        case "email":
            validarCampo(expresiones.email, e.target, 'email');
        break;

        case "affair": //nombre del name dentro del input
            validarCampo(expresiones.affair, e.target, 'affair');
        break;

        case "message": 
         validarCampoMessage(expresiones.message, e.target, 'message');
        break;
    }
}

const validarCampo = (expresion, input, campo) => {
    if(expresion.test(input.value)){
        document.querySelector(`#group__${campo} .form__input__error`).classList.remove('form__input__error-active');
        campos[campo] = true;
    } else {
        document.querySelector(`#group__${campo} .form__input__error`).classList.add('form__input__error-active');
        campos[campo] = false;
    }
}

const validarCampoMessage = (expresion, textarea) => {
    if(expresion.test(textarea.value)){
        document.querySelector(`#group__textarea .form__textarea__error`).classList.remove('form__textarea__error-active');
        campos['message'] = true;
    } else {
        document.querySelector(`#group__textarea .form__textarea__error`).classList.add('form__textarea__error-active');
        campos['message'] = false;
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});

textarea.addEventListener('keyup',validarFormulario);
textarea.addEventListener('blur',validarFormulario);

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if(campos.name && campos.email && campos.affair && campos.message) {
        form.reset();
    }
})


