var Hour = '00',
    Minute = '00',
    Second = '00'
var pauseInterval,
    Pause = document.getElementById('pause'),
    Reset = document.getElementById('reset')
init = document.getElementById('button');

//Function that initializes the event
function Initialize() {
    init.addEventListener('click', function time() {
        pauseInterval = setInterval(() => {
            document.getElementById('text').innerHTML = `${Hour}:${Minute}:${Second}`
            Second++
            if (Second < 10) {
                Second = `0${Second}`
            }
            if (Second == 60) {
                Second = '00'
                Minute++
                if (Minute < 10) {
                    Minute = `0${Minute}`
                }
            }
            if (Minute == 60) {
                Minute = 0
                Hour++
                if (Hour < 10) {
                    Hour = `0${Hour}`
                }
            }
        }, 1 * 1000)
        init.removeEventListener('click', time)


    })

}
Initialize()

//Event that resets timer
function reseTime() {
    Reset.addEventListener('click', function reset() {
        clearInterval(pauseInterval)
        Hour = '00';
        Minute = '00';
        Second = '00';
        document.getElementById('text').innerHTML = "INICIAR"
            //Startup event return
        Initialize()
    })
}
reseTime()

//Event that pauses timer
function PauseTime() {
    Pause.addEventListener('click', function pause() {
        clearInterval(pauseInterval)
        document.getElementById('text').innerHTML = "PAUSA ⏯"
            //Startup event return
        Initialize()
    })
}
PauseTime()