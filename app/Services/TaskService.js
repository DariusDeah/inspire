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
    this.countCompletedTask()
  }

  async undoCheckOffTask(id) {
    let res = await sanndboxApi.put(`darius/todos/${id}`, { completed: false })
this.countCompletedTask()
}

  async deleteTask(id) {
    // console.log(id);
    let res = await sanndboxApi.delete(`darius/todos/${id}`)
    console.log(res)
    ProxyState.tasks = ProxyState.tasks.filter(d => d.id !== id)
    this.updateTaskCount()
  }
  async countCompletedTask() {
    let res = await sanndboxApi.get(`darius/todos?completed=true`)
    console.log('count task funct', res.data);
    ProxyState.doneTasks = res.data.map(d => new Task(d))
    console.log(ProxyState.doneTasks)
    this.updateTaskCount()
  }
  updateTaskCount() {
    document.getElementById('task-total').innerText = ProxyState.tasks.length.toString()

    document.getElementById('tasks-done').innerText = ProxyState.doneTasks.length.toString()
  }
}
export const taskService = new TaskService();