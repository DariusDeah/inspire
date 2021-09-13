import { ImageController } from "./Controllers/ImageController.js";
import { QuoteController } from "./Controllers/QuoteController.js";
import { TaskController } from "./Controllers/taskController.js";
import { TimeController } from "./Controllers/TimeController.js";
import { WeatherController } from "./Controllers/WeatherController.js";

class App {
  weatherController = new WeatherController();
  taskController = new TaskController();
  imagecontroller = new ImageController();
  
  quoteController = new QuoteController();
  timeController = new TimeController();
  
}

window["app"] = new App();
