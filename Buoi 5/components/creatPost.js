import {getItemToLocalStorage} from '../utils.js'


const style = `
    #create-post{
        display: flex;
        justify-content: center;
        margin-top:20px;
    }
    textarea{
        width: 60%;
        height:200px;
        font-size: larger;
    }

`
class CreatePost extends HTMLElement{
    constructor(){
        super();
        this._shadowDom = this.attachShadow({mode: 'open'})
    }
    connectedCallback(){
        this._shadowDom.innerHTML = `
        <style>${style}</style>
        <form id = "create-post">
            <textarea name="content" type="textarea" row="4" id="content"></textarea>
            <button id="post">Post</button>
        </form>
        `
        const postButton = this._shadowDom.getElementById("post")
        const postContent = this._shadowDom.getElementById("content").value.trim()
        if(postContent==""){
            return;
        }
        postButton.addEventListener("click", (e) => {
          e.preventDefault()
          const userData = getItemToLocalStorage("currentUser")
          const time = new Date()
          const postData = {
            createdAt: time.toISOString(),
            createdBy: userData.id,
            createdName: userData.name,
            content: postContent,
            isShown: true,
          }
          firebase.firestore().collection("stories").add(postData)
          alert("Post added!")
        })
    }
}

window.customElements.define('create-post', CreatePost)