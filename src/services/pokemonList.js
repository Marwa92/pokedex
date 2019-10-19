import axios from '../utils/API'

let result
export default async function fetchPokemonAPI() {
  await axios('?limit=30').then(response => {
    result = response.data
  })
  return result
}
