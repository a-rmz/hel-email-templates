import yargs from "yargs";

/**
 * Displays conditionally in development and substitutes Handlebars if tags in production
 *
 * @example Development
 * {{#rif 'name'}}Name{{/rif}}
 * -> rendered depending on name
 *
 * @example Production
 * {{#rif 'name'}}Name{{/rif}}
 * -> {{#if name}}Name{{/if}}
 */
module.exports = function(key, content) {
  if (!!(yargs.argv.production)) {
    return `{{#if ${key}}}${content.fn(this)}{{/if}}`;
  } else if (this[key]) {
    return content.fn(this);
  }
};
