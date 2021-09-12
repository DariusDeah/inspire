export class Weather{
  constructor(weatherData) {
    this.id = weatherData.id;
    this.temp = weatherData.main.temp;
    this.faren = Math.floor((weatherData.main.temp - 273.1) * 9 / 5 + 32);
    this.celsi = Math.floor(weatherData.main.temp - 273.15);
    this.icon = weatherData.weather[0].icon;
    
  }
  get weatherTemplate() {
     return /*html*/`
  <div class="card selectable " onclick="app.weatherController.changeTempStatus()" >
    <div class="text-center">
<img src="http://openweathermap.org/img/wn/${this.icon}.png" alt="">
    </div>
    <div class="d-flex">
    <h3 id="temp-status">${this.faren}</h3><span>°</span> <span id="temp-symbol">F</span>
    </div>
  </div>`
  }
}