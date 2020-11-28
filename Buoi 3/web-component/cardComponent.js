const style =`
<style>
    .card{
        font-family: sans-serif;
        margin-right: 20px;
        color: #363636;
        border: 1px solid #dbdbdb;
    }
    .title{
        font-size: 1.5rem;
        font-weight: 600;
    }
    .card-body{
        border-top: 1px solid #dbdbdb;
        padding: 20px;
    }
    img{
        width: 250px;
    }
</style>
`
class CardComponent extends HTMLElement{
    constructor(){
        super()
        // Khai báo shadow_dom
        this._shadowDom = this.attachShadow({mode: 'open'});
        this.title = this.getAttribute('title');
        this.description = this.getAttribute('description');
        this.imgSrc = this.getAttribute('imgSrc');
        this._shadowDom.innerHTML =`
            ${style}
            <div class="card">

                <img src="${this.imgSrc}"/>
                <div class="card-body">
                    <div class="title"> ${this.title} </div>
                    <div class="description"> ${this.description} </div>
                </div>
            </div>
        `
    }
}

window.customElements.define('card-container', CardComponent)
