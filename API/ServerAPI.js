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
      console.log(response.json())
      //return response.json()
    })
    .catch((error) => console.error(error))
}
