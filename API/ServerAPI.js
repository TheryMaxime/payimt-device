const URL_SERVER = "http://10.0.2.2:8080"

export function getShopList() {
  const url = URL_SERVER + "/cafeteria"
  return fetch(url, {
    method: 'GET',
    headers:{
      'Accept':'application/json',
      'Content-Type':'application/json'
    },
  })
    .then((response) => {
      return response.json()
    })
    .catch((error) => console.error(error))
}

export function requestPayment(cart, phoneNumber) {
  const url = URL_SERVER + "/cafeteria"

  return fetch(url, {
    method: 'POST',
    headers: {
      'Accept':'application/json',
      'Content-Type':'application/json'
    },
    body: JSON.stringify({
      "cart" : cart,
      "phoneNumber" : phoneNumber
    })
  })
    .then((response) => {
      return response.json()
    })
    .catch((error) => console.error(error))
}

export function login(phoneNumber, firstname, lastname) {
  const url = URL_SERVER + "/login"

  return fetch(url, {
    method: 'POST',
    headers: {
      'Accept':'application/json',
      'Content-Type':'application/json'
    },
    body: JSON.stringify({
      "phoneNumber" : phoneNumber,
      "firstname" : firstname,
      "lastname" : lastname
    })
  })
    .then((response) => {
      return response.json()
    })
    .catch((error) => console.error(error))
}
