// const style = `
//     .container{
//         background-color: aqua;
//         line-height:50px;
//     }

// `
export class StoryScreen extends HTMLElement{
    constructor(){
        super();
        this._shadowDom = this.attachShadow({mode: 'open'})
    }

    connectedCallback(){
        this._shadowDom.innerHTML = `
        
        <story-header></story-header>
        <create-post></create-post>
        </div>
        `
    }
}

window.customElements.define('story-screen', StoryScreen)