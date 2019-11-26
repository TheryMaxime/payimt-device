// API/LydiaAPI.js
import md5 from 'js-md5'

<<<<<<< HEAD
const API_PUBLIC_TOKEN_PROD = "5ac63d8703fc4447001415" //--> Vendor token (prod)
const API_PRIVATE_TOKEN_PROD = "5ac63d8715eb7991881236" //--> private prod

const API_PUBLIC_TOKEN_TESTS = "5d95c265636cb822765161" //--> Vendor token test (en attente)
const API_PRIVATE_TOKEN_TESTS = "5d95c26567952842723380" //--> private tests (en attente)

const NUM_LYDIA_TEST = "+33621491838"
const NUM_LYDIA_TEST_MD5 = md5(NUM_LYDIA_TEST)
=======
import LydiaConfiguration from './configuration/LydiaConfiguration'
>>>>>>> develop

const API_PUBLIC_TOKEN_PROD = LydiaConfiguration.API_PUBLIC_TOKEN_PROD //--> Vendor token (prod)
const API_PRIVATE_TOKEN_PRO = LydiaConfiguration.API_PRIVATE_TOKEN_PRO //--> private prod
const API_PUBLIC_TOKEN_TESTS = LydiaConfiguration.API_PUBLIC_TOKEN_TESTS //--> Vendor token test (en attente)
const API_PRIVATE_TOKEN_TESTS = LydiaConfiguration.API_PRIVATE_TOKEN_TESTS //--> private tests (en attente)

const URL_LYDIA_TEST = LydiaConfiguration.URL_LYDIA_TEST
const URL_LYDIA_PROD = LydiaConfiguration.URL_LYDIA_PROD


export function buildSignature(){
  var params = {
    parameter1: 'value_1',
    parameter2: 'value 2',
    parameter3: 'value&3'
  };
  var query = Object.keys(params)
      .map(k => k + '=' + params[k])
      .join('&');

  console.log(query);
}


// OK
export function paymentRequest_do(){
  const url = URL_LYDIA_TEST + '/api/request/do.json'

  let formData = new FormData()
  formData.append('amount', '5.54')
  formData.append('vendor_token', API_PUBLIC_TOKEN_TESTS)
  //formData.append('user_token', NUM_LYDIA_TEST)
  formData.append('recipient', NUM_LYDIA_TEST)
  formData.append('currency', 'EUR')
  formData.append('type', 'phone')


  return fetch(url, {
    method: 'POST',
      headers: {
        Accept: 'application/json',
        //'Content-Type': 'application/json',
      },
      body: formData
  })
    .then((response) => { return response.json()})
    .catch((error) => console.error(error))
}

// OK
export function isregisterFromAPI(){
  const url = URL_LYDIA_TEST + '/api/user/isregister.json?data=' + NUM_LYDIA_TEST_MD5
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
export function loginFromAPI(){
  const url = URL_LYDIA_TEST + '/api/auth/login.json'

  let formData = new FormData()
  formData.append('phone', "+33600112233")
  formData.append('password', 'password')

  return fetch(url, {
    method: 'POST',
      headers: {
        Accept: 'application/json',
        //'Content-Type': 'application/json',
      },
      body: formData
  })
    .then((response) => { return response.json()})
    .catch((error) => console.error(error))
}*/

/*
export function registerFromAPI(){

  const url = URL_LYDIA_TEST + '/api/auth/register.json'

  let formData = new FormData()
  formData.append('vendor_token', API_PUBLIC_TOKEN_TESTS)
  formData.append('firstname', 'ant')
  formData.append('lastname','bou')
  formData.append('email','ant@bou.fr')
  formData.append('phone','+33600112233')
  formData.append('password', 'password')

  return fetch(url, {
    method: 'POST',
      headers: {
        Accept: 'application/json',
        //'Content-Type': 'application/json',
      },
    body: formData
  })
    .then((response) => {return response.json()})
    .catch((error) => console.error(error))
}*/




/*
export function createFakeAccount(){
  const url = URL_LYDIA_TEST + '/api/auth/create_account.json'
  let sig = "email=ant@bou.fr&firstname=ant&lastname=bou&mobilenumber=+33600112233&"+API_PRIVATE_TOKEN_TESTS
  let signature = md5(sig)
  let formData = new FormData()
  formData.append('firstname', 'ant')
  formData.append('lastname','bou')
  formData.append('email','ant@bou.fr')
  formData.append('mobilenumber','+33600112233')
  formData.append('password', 'password')
  formData.append('provider_token', API_PUBLIC_TOKEN_TESTS)
  formData.append('signature', signature)

  return fetch(url, {
    method: 'POST',
      headers: {
        Accept: 'application/json',
        //'Content-Type': 'application/json',
      },
    body: formData
  })
    .then((response) => {return response.json()})
    .catch((error) => console.error(error))
}*/


/*
export function testVendorToken(){
  const url = URL_LYDIA_TEST + '/api/auth/vendortoken.json'
  let formData = new FormData()
  formData.append('vendor_token', API_PUBLIC_TOKEN_TESTS)
  formData.append('vendor_id',API_PRIVATE_TOKEN_TESTS)

  return fetch(url, {
    method: 'POST',
      headers: {
        Accept: 'application/json',
        //'Content-Type': 'application/json',
      },
    body: formData
  })
    .then((response) => {return response.json()})
    .catch((error) => console.error(error))
}*/
