import { ProxyState } from "../AppState.js";
import { Weather } from "../Models/Weather.js";
import { sanndboxApi } from "./AxiosService.js";




class WeatherService{
  
  async getWeather() {
    let res = await sanndboxApi.get('weather')
    ProxyState.weather = new Weather(res.data)
    console.log(res)
  }

}
export const weatherService = new WeatherService