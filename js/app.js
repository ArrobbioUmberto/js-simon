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


// alert(Number)
// let numberUser = ''
// setTimeout (myfunction,3000)
// function myfunction(){
//     for (let i = 0; i < 5;i++){
//         let userTry = parseInt(prompt('Dimmi uno dei numeri che hai appena visto, vediamo se li ricordi tutti'))
//         console.log(numberUser,Number)
//     }
//     if (Number.includes(numberUser)){
//         console.log('complimenti hai indovinato tutti i numeri')
//     }
// }

// const askNumber = parseInt(prompt('Ti ricordi i numeri che hai appena visto ?'))