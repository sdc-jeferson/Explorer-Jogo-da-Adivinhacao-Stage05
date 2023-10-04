// variáveis
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const btnTry = document.getElementById('btnTry') 
const btnReset = document.getElementById('btnReset')

const numberAleatory = Math.round(Math.random() * 10);
let xAttempts = 1;

// eventos
btnTry.addEventListener('click',handleTryClick)
btnReset.addEventListener('click',handleResetClick)
// document.addEventListener('keydown', function(e){
//     if(e.key == 'Enter'){
//         handleResetClick()    
//     }
// })


//funções callback - função recebem como argumento outra função.

function handleTryClick(event){

    event.preventDefault();
    //Não faça o padrão, como esse botao está dentro de um formulario a função dele é enviar este formulario, com o preventDesfault ele deixae de fazer esse padrão.

    const inputNumber = document.querySelector('#inputNumber')

    if(Number(inputNumber.value) == numberAleatory){
        toggleScreen()
        screen2.querySelector('h2').innerText = `Acertou em ${xAttempts} tentativas`
    }   

    inputNumber.value = ''
    xAttempts++
    //xAttempts = xAttempts + 1
}

function handleResetClick(){
    toggleScreen()
    xAttempts = 1
}

function toggleScreen(){    
    screen1.classList.toggle('hide')
    screen2.classList.toggle('hide')
}