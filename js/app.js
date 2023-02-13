console.log('ciao')

const btnEL = document.getElementById('button')
console.log(btnEL)
const containerEL = document.querySelector('.container')
console.log(containerEL)

let Number = []
// generare 5 numeri casuali e metterli dentro una costante 
while (Number.length < 5){
        let randomNumber = Math.round(Math.random() * 9) + 1
        if (!Number.includes(randomNumber)){
            Number.push(randomNumber)
        }
        console.log(randomNumber)
        console.log(Number)
}


alert(Number)

// console.log(numberUser)
setTimeout (myfunction,3000)
function myfunction() {
    let numberUser = [];
    let numberPush = numberUser;
    
    while (numberUser.length < 5) {
      let userTry = parseInt(prompt('Dimmi uno dei numeri che hai appena visto, vediamo se li ricordi tutti'));
      while (isNaN(userTry) || userTry <= 0) {
        userTry = parseInt(prompt('Dimmi uno dei numeri che hai appena visto, vediamo se li ricordi tutti'));
      }
      numberPush.push(userTry);
    }
    console.log(numberPush,Number);
    if (numberUser === Number) {
        containerEL.append = `<h1> Complimenti hai azzeccato tutti i numeri. ${Number}</h1>`
    } else {
        containerEL.append = `<h1> Mi spiace non hai azzeccato tutti i numeri. Guarda quale hai mancato, ${Number}</h1>`
    }
        // console.log(numberPush)
        // console.log(numberPush, Number)
 }
    


// BONUS 

// Pulsante di play che permette di ripetere il gioco ogni volta che clicca il Pulsante

btnEL.addEventListener('click', function(){
    let Number = []
    // generare 5 numeri casuali e metterli dentro una costante 
    while (Number.length < 5){
            let randomNumber = Math.round(Math.random() * 9) + 1
            if (!Number.includes(randomNumber)){
                Number.push(randomNumber)
            }
            console.log(randomNumber)
            console.log(Number)
    }
    
    
    alert(Number)
    
    // console.log(numberUser)
    setTimeout (myfunction,3000)
    function myfunction() {
        let numberUser = [];
        let numberPush = numberUser;
        
        while (numberUser.length < 5) {
          let userTry = parseInt(prompt('Dimmi uno dei numeri che hai appena visto, vediamo se li ricordi tutti'));
          while (isNaN(userTry) || userTry <= 0) {
            userTry = parseInt(prompt('Dimmi uno dei numeri che hai appena visto, vediamo se li ricordi tutti'));
          }
          numberPush.push(userTry);
        }
        console.log(numberPush);
        if (numberPush = Number){
            containerEL.append = `<h1> Complimenti hai azzeccato tutti i numeri. ${Number}</h1>` 
       } else {
        containerEL.append = `<h1> Mi spiace non hai azzaccato tutti i numeri. Guarda quale hai mancato, ${Number}</h1>`
       }
     }
    
})