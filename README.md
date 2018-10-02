# Email templates
### For Helsinki Open Software Development

HTML email templates using the starter project for [Foundation for Emails](http://foundation.zurb.com/emails).

Find out more in [Foundation for Emails github](https://github.com/zurb/foundation-emails).

## Installation

To develop this template, your computer needs [Node.js](https://nodejs.org/en/) 0.12 or greater. The template can be installed with the Foundation CLI, or downloaded and set up manually.

### Using the CLI

Download or clone this repo and run `npm install` inside the project folder.

Email templates and assets are found in `src` folder. Run `npm run build` to compile templates to `docs` folder to be copied and used in your email application.

## Build Commands

### Developing and Previewing
Run `npm start` to kick off the build process. A new browser tab will open with a server pointing to your project files. Pages are compiled to `docs` directory with `{{ handlebars }}` replaced with test content.

### Compiling Templates
Run `npm run build` to inline your CSS into your HTML along with the rest of the build process. Pages are compiled to `docs` directory.

Pages wrapped with `{{!-- raw --}}` ... `{{!-- /raw --}}` tags are compiled `{{ handlebars }}` intact and `{{!-- handlebar comments --}}` visible. These templates are ready to use in your email application. See the pipeline in `gulpfile.babel.js` if you need to tweak the output syntax to match your email service.
