export class Weather{
  constructor(weatherData) {
    this.id = weatherData.id;
    this.temp = weatherData.main.temp;
    this.faren = Math.floor((weatherData.main.temp - 273.1) * 9 / 5 + 32);
    this.celsi = Math.floor(weatherData.main.temp - 273.15);
    this.icon = weatherData.weather[0].icon;
    this.location = weatherData.name
    this.wind = weatherData.wind.speed
    
  }
  get weatherTemplate() {
     return /*html*/`
  <div class="card selectable mb-2 " onclick="app.weatherController.changeTempStatus()" >
    <div class="text-center">
    <h4>${this.location}</h4>
<img src="http://openweathermap.org/img/wn/${this.icon}.png" alt="">
    </div>
    <div class="d-flex">
    <h3 id="temp-status">${this.temp}</h3><span>°</span> <span id="temp-symbol">k</span>
    </div>
  </div>

  <div class="card " >
    <div class="d-flex">
    <h3 id="temp-status">Wind: ${this.wind} mph</h3>
    </div>
  </div>`
  }
}