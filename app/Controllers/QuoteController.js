import { ProxyState } from "../AppState.js"
import { quoteService } from "../Services/QuoteService.js"

function _drawQuote() {
  let template = '';
  if (ProxyState.quote) {
   template = ProxyState.quote.quoteTemplate
  }
  document.getElementById('quote').innerHTML = template
}




export class QuoteController{

  constructor() {
    ProxyState.on('quote', _drawQuote)
    this.getTheQoutes()
  }

 async getTheQoutes() {
   try {
     await quoteService.getQoutes()
   } catch(error) {
     console.error('quote sservice problem',error)
   }
  }
toggleAuthorOn() {
  document.getElementById('author').classList.remove('visually-hidden')
}
toggleAuthorOff() {
  document.getElementById('author').classList.add('visually-hidden')
}
}