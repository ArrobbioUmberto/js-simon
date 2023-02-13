console.log('ciao bonus')
btnEL.addEventListener('click', function () {
    const btnEL = document.getElementById('button')
    console.log(btnEL)
    const containerEL = document.querySelector('.container')
    console.log(containerEL)
    
    let Number = []
    // generare 5 numeri casuali e metterli dentro una costante 
    while (Number.length < 5){
            let randomNumber = Math.round(Math.random() * 99) + 1
            if (!Number.includes(randomNumber)){
                Number.push(randomNumber)
            }
            console.log(randomNumber)
            console.log(Number)
    }
    
    
    alert(Number)
    
    // console.log(numberUser)
    setTimeout (myfunction,30000)
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
        confrontoArray (numberPush,Number)
     }
        
    // FUNZIONI 
    
    // DEVO CREARE UNA FUNZIONE PER METTERE A CONFRONTO I DUE ARRAY CHE SI GENERANO 
    
    function confrontoArray(numberPush, Number) {
        if (numberPush.length !== Number.length) {      // prima condizione per capire subito se non hanno la stessa lunghezza senno non parte neanche il ciclo for 
            containerEL.innerHTML = `<h1 style= " color:orange; font-style:italic; font-size:2rem "> Mi spiace non hai azzeccato tutti i numeri. Guarda quale hai mancato, ${Number}</h1>`
            return false
        }
        numberPush.sort()
        Number.sort()
        for (let i = 0; i < numberPush.length; i++) {
            if (numberPush[i] !== Number[i]) {
                containerEL.innerHTML = `<h1 style= " color:orange; font-style:italic; font-size:2rem "> Mi spiace non hai azzeccato tutti i numeri. Guarda quale hai mancato, ${Number}</h1>`
                return false
            }
        }
        containerEL.innerHTML = `<h1 style= " color:orange; font-style:italic; font-size:2rem "> Complimenti hai azzeccato tutti i numeri. ${Number}</h1>`
        return true
    }
    
    
})