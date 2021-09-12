import { ProxyState } from "../AppState.js"
import { imageService } from "../Services/ImageService.js"

function _drawImage(){
  let template = '';
  if (ProxyState.img) {
    template = ProxyState.img.ImgTemplate
  }
  document.getElementById('bg-pic').innerHTML = template

}






export class ImageController{
  constructor() {
    ProxyState.on('img', _drawImage)
    this.getPhoto()
  }
  
  async getPhoto() {
    try {
      await imageService.getImage()
    } catch (error) {
      console.warn('image controller failed ',error)
    }
  }
}