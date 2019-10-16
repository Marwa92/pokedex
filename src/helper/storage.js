const saveInLocalStorage = (key, item) => {
  const itemStr = JSON.stringify(item)
  localStorage.setItem(key, itemStr)
}

const getFromLocalStorage = key => {
  const itemStr = localStorage.getItem(key)
  const item = JSON.parse(itemStr)
  return item
}

export { saveInLocalStorage, getFromLocalStorage }
