import { ProxyState } from "../AppState.js"
// import { sanndboxApiTodo } from "../Services/AxiosTodoService.js"
import { taskService } from "../Services/TaskService.js"


function _drawTask(){
let template = '';
 
  ProxyState.tasks.forEach(s => template += s.taskTemplate)
 
  document.getElementById('task').innerHTML = template
  console.log('draw task works ')

}
export class TaskController{
  constructor() {
    ProxyState.on('tasks', _drawTask)
    
    taskService.getTask()
  }

  async addTask(event) {
    event.preventDefault()
// this is conected to my index form submit
// /**
//  * @type {HTMLFormElement}
//  */

    const form = event.target
    
    const taskData = {
  
  description: form.name.value
}
    try {
     await taskService.addTask(taskData) 
    } catch(err) {
      console.error('broken',err)
    }
    console.log('taskdata from task controller', taskData)
    taskService.getTask()
form.reset()
  }
  async getTask() {
    try {
      await taskService.getTask()
    } catch (error) {
      console.error(error)
    }
  }

  async checkTask(id) {
    try {
      await taskService.checkOffTask(id)
      // console.log(id)
    } catch(error) {
      console.error('problem with the check task in task controller',error)
    }
    taskService.getTask()
  }
  
  async undoCheckTask(id) {
    try {
      await taskService.undoCheckOffTask(id)
      console.log('this from undo task',id);
    } catch (error) {
      console.error('undo check off is btoken ',error)
    }
    taskService.getTask()
  }
  
  /**
   * @param {any} id
   */
  async deleteTask(id) {
alert('Confirm Task Delete')
    try {
      
      await taskService.deleteTask(id)
      
    } catch (error) {
      console.error('delete tc broken')
    }
  }
  // async deleteAllTask() {
  //   try {
  //     await taskService.deleteAllTask()
  //   } catch (error) {
  //     console.error('isuue with delete all',error)
  //   }
  
}
