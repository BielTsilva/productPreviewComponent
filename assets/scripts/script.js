const BTN = document.getElementById('btn');

BTN.addEventListener('click', clicked);

function clicked(){
    swal('Added to cart', 'Thank you for you preference', 'success')
}

document.getElementById('price').innerHTML = '$ 149,99'

let i = 0;
let txt = 'P E R F U M E';
let speed = 50;

function typeWriter(){

    if ( i < txt.length ){
        document.getElementById('animation').innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

typeWriter()
