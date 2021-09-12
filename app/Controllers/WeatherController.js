import { ProxyState } from "../AppState.js";
import { weatherService } from "../Services/WeatherService.js";


function _drawWeather(){
  let template = '';
  
  if (ProxyState.weather) {
    template = ProxyState.weather.weatherTemplate
  }
  // we use this way when theres only a single instace in the app and not an array
  // ProxyState.weather.forEach(w => template += w.weatherTemplate)
  document.getElementById('weather').innerHTML = template
  console.log('its workin ')
}





export class WeatherController{
  constructor() {
    ProxyState.on('weather', _drawWeather)
    this.getWeather()
  }


  getWeather() {
    try {
      weatherService.getWeather()
    } catch(error) {
      console.error('weather service broken',error)
    }
  }
  changeTempStatus() {
    if (document.getElementById('temp-status').innerHTML == `${ProxyState.weather.celsi}`) {
      document.getElementById('temp-status').innerHTML = `${ProxyState.weather.faren}`
       document.getElementById('temp-symbol').innerHTML = 'F'
    } else {
      document.getElementById('temp-status').innerHTML = `${ProxyState.weather.celsi}`
      document.getElementById('temp-symbol').innerHTML = 'C'
    }
   
  }
}