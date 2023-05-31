window.addEventListener('load',()=> { //Escucha toda la ventana cuando se carga el documento

    //Crear dos constantes y guardamos los elementos
    const display = document.querySelector('.display'); //Busca la pantalla /Query selector porque solo va a buscar un elemento
    const keypadButtons = document.getElementsByClassName('keypad-button'); //Buscar los botones por clase

    //Convertimos el HTMLCollection en un Array
    const keypadButtonsArray = Array.from(keypadButtons);

    //Leer cada elemento del array y escuchar cuando se hace click en un boton
    keypadButtonsArray.forEach((button) => {
        button.addEventListener('click', ()=> { //Escuchar cada boton cuando se hace clic
            console.log(button.innerHTML); //Leer lo que contiene el contenedor del boton (Mostrarlo en consola)
            calculadora(button, display);
            
        });
    })
});

function calculadora (button, display) {
    switch (button.innerHTML) {
        case 'C':
            borrar(display);
            break
        
        case '=':
            calcular(display);
            break

        default:
            actualizar(display, button);
            break
    }
}

function calcular(display) {
    display.innerHTML = eval(display.innerHTML) //Tomar el string que este dentro del display y resorverlo
}

function actualizar(display, button) {
    //Si la pantalla tiene un "0" escrito borrarlo
    if (display.innerHTML == 0) {
        display.innerHTML = '';
    }

    display.innerHTML += button.innerHTML;

}

//Sustituir la pantalla por "0"
function borrar(display) {
    display.innerHTML = '0';
}