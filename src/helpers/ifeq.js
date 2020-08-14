/**
 * If with value comparison
 * @example
 * {{{{ifeq lang "fi"}}}}
 * Suomenkielinen teksti
 * {{{{/ifeq}}}}
 */
module.exports = function(value1, value2, options) {
  if (value1 == value2) {
    return options.fn(this);
  }
}
