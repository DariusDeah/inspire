import { generateId } from "../Utils/generateId.js";

export class Task{
  constructor(taskData) {
    this.id = taskData.id || generateId()
    this.description = taskData.description
    this.completed = taskData.completed

  }


  get taskTemplate() {
    return /*html*/`
 <div class="selectable">
   <li class="list-group-item d-flex justify-content-between ${this.completed == true ? 'crossout':''}" onclick="app.taskController.checkTask('${this.id}')"  >

 <button class="btn btn-primary">✔</button>
 ${this.description}
 <div>
 <button class="btn btn-danger" onclick="app.taskController.deleteTask('${this.id}')">X</button>
 </div>
 </li>
 </div>
      `
  }
}