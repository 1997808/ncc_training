function removeEmpty(obj) {
  return Object.keys(obj)
    .filter(function (k) {
      return obj[k] != null;
    })
    .reduce(function (acc, k) {
      acc[k] = obj[k];
      return acc;
    }, {});
}

module.exports = {
  removeEmpty
}