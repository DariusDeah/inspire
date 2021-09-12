import { ImageController } from "./Controllers/ImageController.js";
import { TaskController } from "./Controllers/taskController.js";
import { WeatherController } from "./Controllers/WeatherController.js";

class App {
  weatherController = new WeatherController()
  taskController = new TaskController()
  imagecontroller = new ImageController()
}

window["app"] = new App();
