exports.notEmpty = val => {
  return v => {
    if (!v || v.trim === '') {
      return `${val} is required`
    } else {
      return true
    }
  }
}
