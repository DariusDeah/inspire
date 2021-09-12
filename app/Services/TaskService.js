import { ProxyState } from "../AppState.js";
import { Task } from "../Models/Task.js";
import { sanndboxApi } from "./AxiosService.js";


class TaskService{
  async addTask(taskData) {
   
    let res = await sanndboxApi.post(`darius/todos`, { description: `${taskData.description}` } )
    
    console.log('the todo res', res.data)
    

  }

  async getTask() {
    let res = await sanndboxApi.get('darius/todos',)
    
    console.log('get task res', res.data)
    ProxyState.tasks = res.data.map(t => new Task(t))
    this.updateTaskCount()

  }

  async checkOffTask(id) {
    let res = await sanndboxApi.put(`darius/todos/${id}`, { completed: true })
 

    console.log(res.data.completed)
  }

  async undoCheckOffTask(id) {
    let mainRes = await sanndboxApi.get()
    let res = await sanndboxApi.put(`darius/todos/${id}`, { completed: false })
    
}

  async deleteTask(id) {
    // console.log(id);
    let res = await sanndboxApi.delete(`darius/todos/${id}`)
    console.log(res)
    ProxyState.tasks = ProxyState.tasks.filter(d => d.id !== id)
    this.updateTaskCount()
  }

//   async deleteAllTask(id) {
//     let res = await sanndboxApi.delete(`darius/todos`,id)
//     console.log(res.data)
//     ProxyState.tasks = []
//  }
  
  updateTaskCount() {
  document.getElementById('task-total').innerText = ProxyState.tasks.length.toString()
  }
}
export const taskService = new TaskService();