import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  // /** @type {import('./Models/Value').Value[]} */
  // values = []
  /** @type {import('./Models/Weather').Weather} */
  weather = null
  /** @type {import('./Models/Task').Task[]} */
  tasks = []
   /** @type {import('./Models/Task').Task[]} */
  doneTasks = []
  /** @type {import('./Models/Image').Image} */
  img = null
  /** @type {import('./Models/Quote').Quote} */
  quote = null
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
