export function getDataFromDoc(doc) {
    const data = doc.data()
    data.id = doc.id
    return data
  }
  // lay du lieu tu get many document
  export function getDataFromDocs(data) {
    // const docs = data.docs
    // const listRes = []
    // for (const item of docs) {
    //   listRes.push(getDataFromDoc(item))
    // }
    // return listRes
    return data.docs.map(getDataFromDoc)
  }

  export function saveToLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value) )
  }

  export function getItemToLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key))
  }