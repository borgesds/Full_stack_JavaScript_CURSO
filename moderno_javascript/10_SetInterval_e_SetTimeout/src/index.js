let timeoutID = setTimeout(() => {
    console.log("Execute após 2 segundos")
}, 2000)

clearTimeout(timeoutID)

let seconds = 0
let intervalId = setInterval(() => {
    seconds = seconds +=2
    console.log(`Execute a cada ${seconds} segundos`)
    if(seconds >= 10) clearInterval(intervalId)
}, 2000)