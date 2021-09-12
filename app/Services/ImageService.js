import { ProxyState } from "../AppState.js";
import { Image } from "../Models/Image.js";
import { sanndboxApi } from "./AxiosService.js";

class ImageService{
  async getImage() {
    let res = await sanndboxApi.get('images')

   ProxyState.img = new Image(res.data)
    console.log('img res from service',res.data.imgUrl)
  }
}
export const imageService = new ImageService