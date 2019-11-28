// API/LydiaAPI.js
import md5 from 'js-md5'

import LydiaConfiguration from './configuration/LydiaConfiguration'

const API_PUBLIC_TOKEN_PROD = LydiaConfiguration.API_PUBLIC_TOKEN_PROD //--> Vendor token (prod)
const API_PRIVATE_TOKEN_PRO = LydiaConfiguration.API_PRIVATE_TOKEN_PRO //--> private prod
const API_PUBLIC_TOKEN_TESTS = LydiaConfiguration.API_PUBLIC_TOKEN_TESTS //--> Vendor token test (en attente)
const API_PRIVATE_TOKEN_TESTS = LydiaConfiguration.API_PRIVATE_TOKEN_TESTS //--> private tests (en attente)

const URL_LYDIA_TEST = LydiaConfiguration.URL_LYDIA_TEST
const URL_LYDIA_PROD = LydiaConfiguration.URL_LYDIA_PROD

const NUM_LYDIA_TEST = "+33621491838"
const NUM_LYDIA_CREATED = "+33600112233"
const PHONE_ANTOINE = "+33767533917"
const PHONE_MAX = "+33633739225"


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
export function paymentRequest_do(amount){
  const url = URL_LYDIA_PROD + '/api/request/do.json'

  let formData = new FormData()
  formData.append('amount', amount)
  formData.append('payment_method', 'lydia')
  formData.append('vendor_token', API_PUBLIC_TOKEN_PROD)
  formData.append('message','!! NE PAS TENIR COMPTE !! Test intégration API Lydia Antoine/Maxime (Problème ? Voir HOUSSEM)')
  //formData.append('user_token', NUM_LYDIA_TEST)
  formData.append('recipient', PHONE_ANTOINE)
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

export function getPermissionsFromAPI(){
  const url = URL_LYDIA_TEST + '/api/business/getpermission.json'

  let formData = new FormData()
  formData.append('vendor_token', API_PUBLIC_TOKEN_TESTS)
  formData.append('cashier_phone', NUM_LYDIA_CREATED)

  return fetch(url, {
    method: 'POST',
      headers: {
        Accept: 'application/json',
      },
      body: formData
  })
    .then((response) => { return response.json()})
    .catch((error) => console.error(error))
}


export function removeCashierFromAPI(){

  const url = URL_LYDIA_TEST + '/api/business/removecashier.json'

  let formData = new FormData()
  formData.append('vendor_token', API_PUBLIC_TOKEN_TESTS)
  formData.append('cashier_phone', NUM_LYDIA_CREATED)

  return fetch(url, {
    method: 'POST',
      headers: {
        Accept: 'application/json',
      },
      body: formData
  })
    .then((response) => { return response.json()})
    .catch((error) => console.error(error))
}


export function getB2CbalanceFromAPI(){
  const url = URL_LYDIA_TEST + '/api/business/b2cbalance.json'

  let formData = new FormData()
  formData.append('vendor_token', API_PUBLIC_TOKEN_TESTS)
  formData.append('signature', md5("vendor_token="+API_PUBLIC_TOKEN_TESTS+"&"+API_PRIVATE_TOKEN_TESTS))

  return fetch(url, {
    method: 'POST',
      headers: {
        Accept: 'application/json',
      },
      body: formData
  })
    .then((response) => { return response.json()})
    .catch((error) => console.error(error))
}

export function getListTransactionsFromAPI(){
  const url = URL_LYDIA_TEST + '/api/transaction/list.json'

  let formData = new FormData()
  formData.append('vendor_token', API_PUBLIC_TOKEN_TESTS)
  formData.append('user_token', NUM_LYDIA_TEST)
  formData.append('startDate', '2019-11-26 01:00:00')
  formData.append('endDate', '2019-11-27 11:00:00')

  return fetch(url, {
    method: 'POST',
      headers: {
        Accept: 'application/json',
      },
      body: formData
  })
    .then((response) => { return response.json()})
    .catch((error) => console.error(error))
}


export function loginFromAPI(){
  const url = URL_LYDIA_TEST + '/api/auth/login.json'

  let formData = new FormData()
  formData.append('phone', NUM_LYDIA_CREATED)
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
}

// generated from lydia developer tool (5.54€)
const QRCODE_CONTENT = '["fSsuWg4h5Wg7GDuQBLWYM6rjqb8kxqjunZ+6DgiuWwVbhVfGmOu0i5AoGIjX60o+L+WwPKeaUPyhAvepntFq9/iPSMVhxd6/Ut4VjKeqytj0K5D17w0Plp6wwJF/uAs9ENjscegXfR0jrl62qdr13qGyPwyFra31ZjK+rsLjcDA=","3"]'

export function paymentToCashierFromAPI(){
  const url = URL_LYDIA_TEST + '/api/payment/payment.json'

  let formData = new FormData()
  formData.append('vendor_token', API_PUBLIC_TOKEN_TESTS)
  formData.append('phone', NUM_LYDIA_CREATED) // this num has cashier permissions (see getPermissionsFromAPI)
  formData.append('paymentData', QRCODE_CONTENT)
  formData.append('transmission', 'qrcode')
  formData.append('amount','5.54')
  formData.append('currency', 'EUR')
  formData.append('order_id', 'ORDER_N_1')

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
