import { ProxyState } from "../AppState.js";
import { Quote } from "../Models/Quote.js";
import { sanndboxApi } from "./AxiosService.js";

class QuoteService{
  async getQoutes() {
    let res = await sanndboxApi.get('quotes')
    ProxyState.quote = new Quote(res.data)
    console.log('from quote service',res);
  }
}
export const quoteService = new QuoteService