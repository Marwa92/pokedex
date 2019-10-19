import axios from '../utils/API'

let res

export default async function fetchPokemonDataAPI(key) {
  await axios(`${key}`).then(response => {
    res = response.data
  })
  return res
}
