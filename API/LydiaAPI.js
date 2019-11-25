// API/LydiaAPI.js

const API_PUBLIC_TOKEN_PROD = "5ac63d8703fc4447001415" //--> Vendor token (prod)
const API_PRIVATE_TOKEN_PRO = "5ac63d8715eb7991881236" //--> private prod
const API_PUBLIC_TOKEN_TESTS = "5d95c265636cb822765161" //--> Vendor token test (en attente)
const API_PRIVATE_TOKEN_TESTS = "5d95c26567952842723380" //--> private tests (en attente)

const NUM_LYDIA_TEST = "+33621491838"

const URL_LYDIA_TEST = "https://homologation.lydia-app.com"
const URL_LYDIA_PROD = "https://lydia-app.com"

export function isregisterFromAPI(phone){

  const url = URL_LYDIA_PROD + '/api/user/isregister.json?data=' + phone
  return fetch(url, {
    method: 'GET',
    headers:{
      'Accept':'application/json',
      'Content-Type':'application/json'
    },
  })
    .then((response) => { return response.json()})
    .catch((error) => console.error(error))
}
/*
export function loginFromAPI(phone, password){
  const url = URL_LYDIA_TEST + '/api/auth/login.json'
  return fetch(url, {
    method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        phone: phone,
        password: password,
      })
  })
    .then((response) => { return response.json()})
    .catch((error) => console.error(error))
}*/
