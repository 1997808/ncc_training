var validator = require('validator');
var { removeAccent } = require('../utils/removeAccent')

const checkAvailable = (field, val, err) => {
  if (!validator.isLength(val, { min: 1 }))
    return err.push('Must have ' + field)
}

const checkAlpha = (field, val, err) => {
  if (!validator.isAlpha(removeAccent(val), "en-US", { ignore: ' ' }))
    return err.push(field + " can only contain alphabet")
}

const checkAlphaNumeric = (field, val, err) => {
  if (!validator.isAlphanumeric(removeAccent(val), "en-US", { ignore: ' ' }))
    return err.push(field + " can only contain alphabet, numbers")
}

const checkNumeric = (field, val, err) => {
  if (!validator.isNumeric(val))
    return err.push(field + " can only contain number")
}

const typeValidate = (req, res, next) => {
  var errors = [];
  var { name } = req.body

  checkAvailable("name", name, errors)
  checkAlpha("Name", name, errors)

  if (errors.length == 0) {
    next();
  } else {
    res.send(errors);
  }
}

const itemCreateValidate = (req, res, next) => {
  var errors = [];
  var { name, type, category, price, description } = req.body

  checkAvailable("name", name, errors)
  checkAvailable("type", type, errors)
  checkAvailable("category", category, errors)
  checkAvailable("price", price + '', errors)

  checkAlphaNumeric("Name", name, errors)
  checkNumeric("Price", price, errors)
  checkAlphaNumeric("Description", description, errors)

  if (errors.length == 0) {
    next();
  } else {
    res.send(errors);
  }
}

module.exports = {
  typeValidate,
  itemCreateValidate
}