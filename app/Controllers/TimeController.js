
 function drawTime() {
   let date = new Date()
   let hoursTime = date.getHours()
   let minutesTime = date.getMinutes()
   let secondsTime = date.getSeconds()
   let timeStatus = `${hoursTime >= 0 && hoursTime <= 12 ? 'AM' : 'PM'}`
   
// sets clock to 12 hour based
   if(hoursTime == 0){
        hoursTime = 12;
    }
    
    if(hoursTime > 12){
        hoursTime = hoursTime - 12;
   }
// adds a 0 infront of single digit numbers
  let mT =  (minutesTime < 10) ? `0${minutesTime}` : minutesTime;
 let  sT = ( secondsTime < 10)  ?  `0${secondsTime}`: secondsTime;
   
   let fullTime = `${hoursTime}:${mT}:${sT}`
   document.getElementById('time').innerText = fullTime
   document.getElementById('amPM').innerText = timeStatus
   console.log(hoursTime);

   setTimeout(drawTime, 1000)
}

export class TimeController{
  constructor() { 
    drawTime()
  }

}