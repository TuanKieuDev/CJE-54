const style = 
`<style>
   .card{
      margin-right: 20px;
   }
</style>
`
 class cardStudent extends HTMLElement {
    constructor(){
    super()
   this._shadowDom = this.attachShadow({mode: 'open'});
   this.imgSrc = this.getAttribute('imgSrc');
   this.age = this.getAttribute('age')
   this.name = this.getAttribute('name')
   this.address = this.getAttribute('address')
   this._shadowDom.innerHTML =
   `
   ${style}
   <div class="card">
   <img src = " ${this.imgSrc} " >
   <div class="card-body">
   <div class="name">${this.name}</div>
   <div class="age">${this.age}</div>
   <div class="address">${this.address}</div>
   </div>
   </div>
   `
}
}
window.customElements.define('card-container', cardStudent)