import { ProxyState } from "../AppState.js";
import { Task } from "../Models/Task.js";
import { sanndboxApi } from "./AxiosService.js";
//  import { sanndboxApiTodo } from "./AxiosTodoService.js";


 // @ts-ignore
// export const sanndboxApiTodo = axios.create({
//   baseURL : 'https://bcw-sandbox.herokuapp.com/api/darius/todos'
// })


class TaskService{
  async addTask(taskData) {
   
    let res = await sanndboxApi.post(`darius/todos`, { description: `${taskData.description}` } )
    
    console.log('the todo res',res.data)
   
    //  ProxyState.tasks = [...ProxyState.tasks, new Task(res.data.desc)]
    

  }

  async getTask() {
    let res = await sanndboxApi.get('darius/todos',)
    
    console.log('get task res', res.data)
   ProxyState.tasks =  res.data.map(t => new Task(t))

    // ProxyState.tasks = [...ProxyState.tasks, new Task(res.data.description)]

  }

  // async checkOffTask(taskData) {
  //   let res = await sanndboxApi.put('darius/todos',)
  // }

  async deleteTask(id) {
    console.log(id);
    let res = await sanndboxApi.delete(`darius/todos/${id}`)
    console.log(res)
    ProxyState.tasks = ProxyState.tasks.filter(d => d.id !== id)
  }

//   async deleteAllTask(id) {
//     let res = await sanndboxApi.delete(`darius/todos`,id)
//     console.log(res.data)
//     ProxyState.tasks = []
//  }
}
export const taskService = new TaskService();