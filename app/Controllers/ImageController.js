import { ProxyState } from "../AppState.js"
import { imageService } from "../Services/ImageService.js"

function _drawImage(){
  document.getElementById('bg-pic').style.backgroundImage = `url(${ProxyState.img.imgUrl})`
  document.getElementById('bg-pic').style.backgroundSize= `cover`
  

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