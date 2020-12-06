import { getDataFromDoc, getDataFromDocs } from "./utils.js"
import './userInfo.js'
getManyDocument()

// read one
async function getOneDocument() {
  // promise
  // firebase.firestore().collection('users').doc('qWbWN54iU67Z8KqAYs75').get()
  // .then((res) => {
  //   console.log(res)
  // })
  // async await
  const res = await firebase.firestore().collection('users').doc('Ri3z1mbuOAMe1AITW5bq').get()
  const user = res.data()
  user.id = res.id
  console.log(user)
}
// get many documents
async function getManyDocument() {
  const res = await firebase.firestore().collection('users')
  .where('age', '==', 18).get()
  const user = getDataFromDocs(res)
  //console.log(user)
  return user
}

getManyDocument().then(res => {
    let html = ''
    for (const item of res) {
        html+=`<user-info name="${item.name}"></user-info>`
    }
    document.getElementById('app').innerHTML = html;
})
//console.log(listUser);

function addDocument() {
    const data = {
        name: 'alex',
        age:23
    }
    firebase.firestore().collection('users').add(data)
}

//addDocument();

function updateDocument() {
    const docId = 'BFpAahtPxDUI4zBFliBV'
    const data ={
        phones: firebase.firestore.FieldValue.arrayUnion(1234)
    }
    firebase.firestore().collection('users')
    .doc(docId).update(data)
}
updateDocument();

function deleteDocument() {
    const docId = 'ZmlcIi8hRkohCoYhBu1e'
    firebase.firestore().collection('users').doc(docId).delete();    
}

deleteDocument();

