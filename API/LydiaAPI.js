// API/LydiaAPI.js

import LydiaConfiguration from './configuration/LydiaConfiguration'

const API_PUBLIC_TOKEN_PROD = LydiaConfiguration.API_PUBLIC_TOKEN_PROD //--> Vendor token (prod)
const API_PRIVATE_TOKEN_PRO = LydiaConfiguration.API_PRIVATE_TOKEN_PRO //--> private prod
const API_PUBLIC_TOKEN_TESTS = LydiaConfiguration.API_PUBLIC_TOKEN_TESTS //--> Vendor token test (en attente)
const API_PRIVATE_TOKEN_TESTS = LydiaConfiguration.API_PRIVATE_TOKEN_TESTS //--> private tests (en attente)

const URL_LYDIA_TEST = LydiaConfiguration.URL_LYDIA_TEST
const URL_LYDIA_PROD = LydiaConfiguration.URL_LYDIA_PROD

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
