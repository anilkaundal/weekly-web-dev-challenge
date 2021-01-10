import { now } from './utility.js'

const getClockTemplate = id => `<div id="clock-${id}"" class="clock">
    <div class="hand second-hand" id="clock-${id}-second-hand"></div>
    <div class="hand minute-hand" id="clock-${id}-minute-hand"></div>
    <div class="hand hour-hand" id="clock-${id}-hour-hand"></div>
    <div class="clock-center"></div>
    <div class="digital-clock">
    <span class="hour">00</span>:<span class="min">00</span>:<span class="sec">00</span>
    <div>
</div>`

let HH = 0, mm = 0, ss = 0


const pad = (n, width, z) => {
  z = z || '0';
  n = n + '';
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}


const getTime = () => {
    let digi = document.querySelector(".digital-clock")
    let hr = digi.querySelector(".hour")
    let min = digi.querySelector(".min")
    let sec = digi.querySelector(".sec")
    HH = now().hours
    mm = now().minutes
    ss = now().seconds
    hr.innerHTML=`${pad(HH,2)}`
    min.innerHTML=`${pad(mm,2)}`
    sec.innerHTML=`${pad(ss,2)}`
}

const updateTime = () => {
    let digi = document.querySelector(".digital-clock")
    let hands
    let hr = digi.querySelector(".hour")
    let min = digi.querySelector(".min")
    let sec = digi.querySelector(".sec")
    getTime()
    setInterval( () => {
        ss++
        if(ss === 60){
            ss = 0
            mm++ 
            if(mm === 60){
                mm = 0
                getTime()
                HH++
                if(HH === 24){
                    HH = 0
                }
                hr.innerHTML=`${pad(HH,2)}`
            }
            min.innerHTML=`${pad(mm,2)}`
        }
        sec.innerHTML=`${pad(ss,2)}`
    },1000)
}

const updateClock = () => {
    let clock0 = document.querySelector(".clock")
    let sec_hand = clock0.querySelector(".second-hand")
    let min_hand = clock0.querySelector(".minute-hand")
    let hr_hand = clock0.querySelector(".hour-hand")
    setInterval(()=>{
        let sec_factor = (1/60)*(ss-15)
        let min_factor = (1/3600)*((mm-15)*60+(ss))
        let hr_factor = (1/43200)*((HH-15)*3600+(mm)*60+(ss))
        sec_hand.style.transform = `rotate(${sec_factor}turn) translate(50%)`
        min_hand.style.transform = `rotate(${min_factor}turn) translate(50%)`
        hr_hand.style.transform = `rotate(${hr_factor}turn) translate(50%)`
    },500)
}

const startClock = () => {
    let id=0 
    document.body.innerHTML = getClockTemplate(id)
    updateTime()
    updateClock()
}

startClock()

/*
Description:
    Your job is to fix this broken clock!
    Right now it's only right twice a day.

Skills: 
    CSS Transforms, JavaScript Dates, setTimeout()/setInterval(), HTML/CSS in JavaScript

Stretch goals: 
    - Go all out with the styling: a Grandfather clock, a cuckoo clock, an astrological clock?
    - Make a digital clock instead
    - tell the time in different  timezones/on different planets? 🪐👽

*/