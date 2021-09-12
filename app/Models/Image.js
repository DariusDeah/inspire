export class Image{
  constructor(imageData) {
    this.imgUrl = imageData.largeImgUrl
  }

  get ImgTemplate() {
    return /*html*/`
    <img src="${this.imgUrl}" alt="pic">
    `
  }
}