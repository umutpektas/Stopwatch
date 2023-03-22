const time_el = document.querySelector('.watch .time')
const start_btn = document.getElementById('start')
const stop_btn = document.getElementById('stop')
const reset_btn = document.getElementById('reset')

let seconds = 0
let interval = null


start_btn.addEventListener('click', start)
stop_btn.addEventListener('click', stop)
reset_btn.addEventListener('click', reset)

function timer (){
    seconds++

    let hours = Math.floor(seconds/(60*60))
    let mins = Math.floor((seconds- (hours * (60*60) ) ) / 60)
    let secs = seconds % 60
    

    if(secs<10) secs = '0' + secs
    if(mins<10) mins = '0' + mins
    if(hours<10) hours = '0' + hours

    time_el.innerText = `${hours}:${mins}:${secs}`
}

function start (){
    if(interval){
        return
    }
    interval = setInterval(timer,1000)
}

function stop (){
    clearInterval(interval)
    interval = null 
}

function reset(){
    stop()
    seconds = 0
    time_el.innerText = '00:00:00'
}
