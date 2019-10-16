import axios from 'axios'

export default axios.create({
  baseURL: 'https://pokeapi.co/api/v2/pokemon',
  // baseURL: 'https://pokeapi.co/api/v2/pokemon?limit=25',
  responseType: 'json',
})
