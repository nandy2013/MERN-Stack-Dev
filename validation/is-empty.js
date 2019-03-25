const isEmpty = value =>
  value === undefined ||
  value === NULL ||
  (typeof value === 'object' && Object.keys(vale).length === 0) ||
  (typeof value === 'string' && value.trim().length === 0);

module.exports = isEmpty;