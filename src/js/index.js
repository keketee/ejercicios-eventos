// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';

//Crea un botón en tu página HTML y añade un evento de click que muestre en la consola el texto del botón al hacer click.

const buttonElement = document.getElementById('button')

const buttonClick = () => {
    console.log(buttonElement.textContent)
}
buttonElement.addEventListener('click', buttonClick)

//Crea un h1 con el texto "Soy un título ", al ponerte con el ratón encima del h1, deberá cambiar al texto a "Quita de encima!!!" y al quitarte, deberá volver a poner "Soy un título"



const titleElement = document.getElementById('title')

const titleMouseOver = () => {
    titleElement.textContent = 'Quita de encima!!!'
}
const titleMouseOut = () => {
    titleElement.textContent = 'Soy un título'
}

titleElement.addEventListener('mouseover', titleMouseOver)
titleElement.addEventListener('mouseout', titleMouseOut)


//Agrega un evento de cambio de tamaño de ventana y te muestre por consola el tamaño de la ventana.


const bigWindow = (event) => {
    console.log(`el ancho de la pantalla es ${window.innerWidth} y el alto es ${window.innerHeight}`)
}

window.addEventListener('resize', bigWindow)

//Crea un p con el texto "esperando entrada de teclado" al pulsar cualquier tecla deberá poner qué tecla has pulsado.

const textElement = document.getElementById('text')

const textLetter = (event) => {
    textElement.textContent = `has pulsado la tecla ${event.key}`
}

window.addEventListener('keydown', textLetter)


//Crea un array con 5 palabras. Añade un h2 a tu HTML y ponle un id. Añade dos botones con el texto previus y next respectívamente. Haz que los botones cambien el texto del h2 con las palabras del array, cuando llegues a la última volverás a la primera si pulsas next y cuando estés en la primera podrás volver a la última dandole a previous.


// const subTitle = document.getElementById('subtitle')
// const buttonNextElement = document.getElementById('button-next')
// const buttonPreviusElement = document.getElementById('button-previus')
// const fiveWords = ['hola', 'adios', 'coche', 'camion', 'perro']
// let counter = 0


// const buttonNext = () => {
//     if (counter >= fiveWords.length - 1) {
//         counter = 0
//     } else {
//         counter++
//     }
//     subTitle.textContent = fiveWords[counter]
// }
// const buttonPrevius = () => {


//     if (counter <= 0) {
//         counter = fiveWords.length - 1
//     } else {
//         counter--
//     }
//     subTitle.textContent = fiveWords[counter]

// }
// buttonNextElement.addEventListener('click', buttonNext)
// buttonPreviusElement.addEventListener('click', buttonPrevius)

// subTitle.textContent = fiveWords[0]


//Repite el mismo ejercicio pero esta vez desactiva el botón previous si estás en el primer elemento y el botón next si estás en el último


const subTitle = document.getElementById('subtitle')
const buttonNextElement = document.getElementById('button-next')
const buttonPreviusElement = document.getElementById('button-previus')
const fiveWords = ['hola', 'adios', 'coche', 'camion', 'perro']
let counter = 0

buttonPreviusElement.disabled = true


const buttonPrevius = () => {
    counter--;
    if (counter <= 0) {
        buttonPreviusElement.disabled = true
    }
    buttonNextElement.disabled = false
    subTitle.textContent = fiveWords[counter]
}

const buttonNext = () => {
    counter++
    if (counter >= fiveWords.length - 1) {
        buttonNextElement.disabled = true
    }
    buttonPreviusElement.disabled = false
    subTitle.textContent = fiveWords[counter]
}

buttonNextElement.addEventListener('click', buttonNext)
buttonPreviusElement.addEventListener('click', buttonPrevius)

subTitle.textContent = fiveWords[0]


//Crea un input range con un label, al mover el input range deberá escribir en el label el valor del input range.


const inputElement = document.getElementById('range')
const labelElement = document.getElementById('label')

const changeInput = () => {
    labelElement.textContent = inputElement.value;

}
inputElement.addEventListener('input', changeInput)


//Crea una lista de 4 checkbox con el texto que quieras y un botón, al pulsar el botón deberá decirte cuantos checkbox están marcados y cual es su texto.




const checkCheckboxes = () => {
    // Selecciona todos los checkboxes que están marcados
    const checkboxes = document.querySelectorAll('input[name="option"]:checked');

    // Cuenta cuántos checkboxes están marcados
    const count = checkboxes.length;

    // Inicializa una cadena vacía para los valores seleccionados
    let selectedValues = '';

    // Recorre los checkboxes marcados y construye la cadena de valores
    checkboxes.forEach((checkbox, index) => {
        selectedValues += checkbox.value;
        // Agrega una coma y espacio después de cada valor, excepto el último
        if (index < count - 1) {
            selectedValues += ', ';
        }
    });

    // Muestra el resultado
    const resultText = `Se han marcado ${count} checkbox: ${selectedValues}.`;
    document.getElementById('resultado').textContent = resultText;
};

// Agrega el evento al botón
document.getElementById('buttoncheck').addEventListener('click', checkCheckboxes);