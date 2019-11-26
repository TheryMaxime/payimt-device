const URL_SERVER = "http://10.0.2.2:8080"

export function getShopList() {
  const url = URL_SERVER + "/shop"
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
