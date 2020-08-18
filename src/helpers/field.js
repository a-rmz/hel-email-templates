import yargs from "yargs";
import _ from "lodash";

/**
 * Displays values from context in development and substitutes Handlebars tags in production
 *
 * @example Development
 * {{field 'name'}}
 * -> Name
 *
 * @example Production
 * {{field 'name'}}
 * -> {{ name }}
 */
module.exports = function(key) {
  if (!!(yargs.argv.production)) {
    return "{{ " + key + " }}";
  } else {
    return _.get(this, key);
  }
};
