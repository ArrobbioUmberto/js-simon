console.log('ciao')


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
let numberUser = []
let numberPush 
// console.log(numberUser)
setTimeout (myfunction,3000)
function myfunction(numberUser){
    numberUser = []
    let numberPush = numberUser
    for (let i = 0; i < 5;i++){
        let userTry = parseInt(prompt('Dimmi uno dei numeri che hai appena visto, vediamo se li ricordi tutti'))
        numberPush.push(userTry)
        console.log(numberPush)
    }
    console.log(numberPush, Number)
    if (numberPush = Number){
        console.log("Complimenti hai azzeccato tutti i numeri")
    }
}