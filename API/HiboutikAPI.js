// API/HiboutikAPI

const HIBOUTIK_URL_TEST = "https://demoapi.hiboutik.com"

export function tryHiboutikAPI(){
  const url = HIBOUTIK_URL_TEST + '/api/products/?p=1'

  return fetch(url, {
    method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type':'application/json'
      }
  })
    .then((response) => { return response.json()})
    .catch((error) => console.error(error))
}
