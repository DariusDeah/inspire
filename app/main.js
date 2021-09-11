import { TaskController } from "./Controllers/taskController.js";
import { WeatherController } from "./Controllers/WeatherController.js";

class App {
  weatherController = new WeatherController()
  taskController = new TaskController()
}

window["app"] = new App();
