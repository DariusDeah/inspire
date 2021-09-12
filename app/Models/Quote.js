export class Quote{
  constructor(quoteData) {
    this.quote = quoteData.content
    this.author = quoteData.author
    this.tag = quoteData.tags[0]
  }
  get quoteTemplate() {
    return /*html*/`
    <div class="card quote-card" onmouseover="app.quoteController.toggleAuthorOn()"
     onmouseleave="app.quoteController.toggleAuthorOff()" >

  <div class="card-header">
  ${this.tag}
  </div>
  <div class="card-body">
    <blockquote class="blockquote mb-0">
      <p>${this.quote}</p>
      <footer id="author"class="blockquote-footer author-footer visually-hidden">${this.author}</footer>
    </blockquote>
  </div>
</div>
`
  }
}