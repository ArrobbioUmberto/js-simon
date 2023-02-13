console.log('ciao')


const containerEL = document.querySelector('.container')
console.log(containerEL)

let Number = []
// generare 5 numeri casuali e metterli dentro una costante 
for (let i=0; i< 5;i++){
    let randomNumber = Math.round(Math.random() * 100)
    Number.push(randomNumber)
    console.log(randomNumber)
}

alert(Number)

// const askNumber = parseInt(prompt('Ti ricordi i numeri che hai appena visto ?'))