const emailSubscriber = ['xxx@dominiomail.com', 'yyy@dominiomail.com', 'zzz@dominiomail.com' ]
const email = document.getElementById('user_email');
const check = document.getElementById('send_email');
const response = document.getElementById('response');

check.addEventListener ('click', ()=>{
    let checked= false;
    for (i=0; i<emailSubscriber.length; i++){
        if(email.value.toLowerCase()===emailSubscriber[i].toLowerCase()){
            checked=true;
            break;
        }
    }
    (checked) ? response.innerHTML ='Risulti iscritto alla nostra newsletters' : response.innerHTML = 'Non risulti ancora iscritto alla newsletters';
})
// ----------------------------------------------
const diceButton = document.getElementById('diceButton');
const winner = document.getElementById('winner');

diceButton.addEventListener('click', ()=>{
    rollDice();
})

function rollDice() {
    let diceOne = 0;
    let diceTwo = 0;
  
    while (diceOne === 0 || diceTwo === 0) {
      diceOne = Math.floor((Math.random() * 6) + 1);
      diceTwo = Math.floor((Math.random() * 6) + 1);
    }
  
    document.querySelector(".img1").setAttribute("src", "img/dice" + diceOne + ".png");
    document.querySelector(".img2").setAttribute("src", "img/dice" + diceTwo + ".png");
  
    if (diceOne === diceTwo) {
      winner.innerHTML = ("Draw!");
    } else if (diceOne > diceTwo) {
      winner.innerHTML = ("Computer Win!");
    } else winner.innerHTML = ("Player Win!");
  }
  