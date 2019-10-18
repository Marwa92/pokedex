import axios from '../utils/API'

let result
export default async function fetchPokemonAPI() {
  // FIXME: should check if component is already cached
  await axios('?limit=30').then(response => {
    result = response.data
  })
  return result
  // FIXME: handle error either here or generally in axios
  // FIXME: state update logic should not be coupled with data fetcing logic; have function do one thing and return the value
}
