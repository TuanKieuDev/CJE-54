const style = 
`<style>
   .card{
      margin-right: 20px;
      text-align:center;
      font-family: sans-serif;
      border: 1px solid #dbdbdb;
      margin-right: 20px;
      padding: 10px;
   }

   .card-body{
      border-top: 1px solid #dbdbdb;
      padding: 20px;
    }
    img{
      width: 100%;
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
   this.birthplace = this.getAttribute('birthplace')
   this._shadowDom.innerHTML =
   `
   ${style}
   <div class="card">
   <img src = " ${this.imgSrc} " >
   <div class="card-body">
   <div class="name">${this.name}</div>
   <div class="age">${this.age}</div>
   <div class="birthplace">${this.birthplace}</div>
   </div>
   </div>
   `
}
}
window.customElements.define('card-container', cardStudent)