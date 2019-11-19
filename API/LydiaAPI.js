// API/LydiaAPI.js

const API_TOKEN = "5ac63d8703fc4447001415" //token public lydia BDE --> Vendor token
const URL_LYDIA_TEST = "https://homologation.lydia-app.com"
const URL_LYDIA_PROD = "https://lydia-app.com"
const phone = "0767533917"
const phone_md5 = '092cde9c583213dbc78036c000075065' //num normal
const phone_md5_p33 = '977dc13b4cc170bafdaa2b2a05d51045' //num en +33


export function getInformationsFromAPI(){

  const url = URL_LYDIA_TEST + '/api/user/isregister.json?data=' + phone_md5_p33
  return fetch(url, {
    method: 'GET',
    headers:{
      'Accept':'application/json',
      'Content-Type':'application/json'
    },
  })
    .then((response) => { response.json().then((response) => {console.log(response)})})
    .catch((error) => console.error(error))
}

/*export function createFakeAccount_test(){
  const url = URL_LYDIA_TEST + '/api/auth/register.json'
  return fetch(url, {
    method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        vendor_token: API_TOKEN,
        firstname: 'Antoine',
        lastname:'Bchz',
        email:'abz@abz.com',
        phone:'+33000000001',
        password:'password1',
      })
  })
    .then((response) => { response.json().then((response) => {console.log(response)})})
    .catch((error) => console.error(error))
}*/
