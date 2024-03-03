//variaveis da aplicação
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
//eventos
const btnTry  = document.querySelector("#btnTry");
const btnReset= document.querySelector("#btnReset");

let randomNumber = Math.round( Math.random() * 10  );
let xTry = 1

//adiciona eventos
btnTry.addEventListener('click',ClickButton)
btnReset.addEventListener('click',playAgain)
document.addEventListener('keypress', PressEnter)
//funcao callback
function ClickButton(event){
    
    event.preventDefault()
    const idInputNumber = Number(document.querySelector("#idInputNumber").value);

    if(idInputNumber < 0 || idInputNumber > 10 ){
        alert('erro de digitação, dihgitar apenas numero de 0 a 10')
        document.querySelector("#idInputNumber").value = '';
        return
    }
    
    if( idInputNumber == randomNumber){
        toggleScreen();
        console.log( 'voce acertou '+xTry+' tentativas')  

        document.querySelector('.screen2 h2').innerText = 'acertou em '+xTry+' tentativas'
    }
    document.querySelector("#idInputNumber").value = '';
    xTry++        
}

function playAgain(event){

    document.querySelector("#idInputNumber").value = '';
    xTry = 1
    randomNumber = Math.round( Math.random() * 10  )
    toggleScreen();
}


function toggleScreen(){
    screen1.classList.toggle('hide')
    screen2.classList.toggle('hide')
}

function PressEnter(e){
    console.log(e.key)
    if (e.key == 'Enter' && screen1.classList.contains('hide')){
        playAgain();
    }

}