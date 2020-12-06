const style = `
    .register-container {
        width: 100vw;
        height: 100vh;
        background: url('https://www.crushpixel.com/big-static13/preview4/blue-technology-circle-computer-abstract-1217830.jpg');
        background-repeat: no-repeat;
        background-size: cover; 
        display: flex;
        justify-content: flex-end;
    }
    #register-form{
        width: 30%;
        background: #fff;
        height: 100vh;
        line-height: 30px;
    }
    h1{
        color: #333;
    }

    form{
        text-align: center;
    }

`

function IsInvalidEmail(the_email) {
    let at = the_email.indexOf("@");
    let dot = the_email.lastIndexOf(".");
    let space = the_email.indexOf(" ");
    
   if ((at != -1) && //có ký tự @
    (at != 0) && //ký tự @ không nằm ở vị trí đầu
    (dot != -1) && //có ký tự .
    (dot > at + 1) && (dot < the_email.length - 1) //phải có ký tự nằm giữa @ và . cuối cùng
    &&
    (space == -1)) //không có khoẳng trắng 
    return true;
     else return false;
    }

// var EMAIL_LOCATION = 'https://console.firebase.google.com/u/0/project/ci-54-85502/firestore/data~2Fusers';
// function existEmail(myEmail) {
//     var usersRef = new Firebase(EMAIL_LOCATION);
//     usersRef.child(myEmail).once('value', function(snapshot) {
//       var exists = (snapshot.val() !== null);
//       if (exists) {
//         return false;
//       } else {
//         return true;
//       }
//     });
//   }



class RegisterScreen extends HTMLElement{
    constructor(){
        super()
        this._shadowRoot = this.attachShadow({mode: 'open'})
    }
    connectedCallback(){
        this._shadowRoot.innerHTML=`
        <style>${style}</style>
        <div class="register-container">
            <form id="register-form">
                <h1>CI PROJECT</h1>
                <input-wrapper id="first-name" type="text" placeholder="First name"></input-wrapper>
                <input-wrapper id="last-name" type="text" placeholder="Last name"></input-wrapper>
                <input-wrapper id="email" type="text" placeholder="Email"></input-wrapper>
                <input-wrapper id="password" type="password" placeholder="Password"></input-wrapper>
                <input-wrapper id="confirm-password" type="password" placeholder="Confirm password"></input-wrapper>
                <button>Register</button>
            </form>
        </div>
        `
        const registerForm = this._shadowRoot.getElementById('register-form')
        registerForm.addEventListener('submit', (e)=>{
            e.preventDefault()
            const firstName = this._shadowRoot.getElementById('first-name').value;
            const lastName = this._shadowRoot.getElementById('last-name').value;
            const email = this._shadowRoot.getElementById('email').value;
            const password = this._shadowRoot.getElementById('password').value;
            const confirmPassword = this._shadowRoot.getElementById('confirm-password').value;
            const firebaseData = firebase.firestore().collection('users');
            if(firstName==''||lastName==''||email==''||password==''||confirmPassword==''){
                alert("You must fill in the form to continue");
                return;
            }
            if(password!=confirmPassword){
                alert("Please check your password, it doesn't match with confirm password");
                return;
            }
            // if(firebaseData.includes(email)){
            //     alert("Email already exist");
            //     return;
            // }
            if(password.length<6){
                alert("Your password must > 6 characters or numbers")
                return;
            }
            if(IsInvalidEmail(email)==0){
                alert("Email Invalid");
                return;
            }
            // if(existEmail(email)==0){
            //     alert("Email exist");
            //     return;
            // }

            const newUser = {
                name: `${firstName} ${lastName}`,
                email: email,
                password: CryptoJS.MD5(password).toString(CryptoJS.enc.Hex),
              }
              
              firebaseData.add(newUser);
              alert("Register Done");
              
        })


    }
    
    
}
window.customElements.define('register-screen', RegisterScreen)

