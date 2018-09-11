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

Run `npm start` to kick off the build process. A new browser tab will open with a server pointing to your project files.

Run `npm run build` to inline your CSS into your HTML along with the rest of the build process.

Run `npm run litmus` to build as above, then submit to litmus for testing. *AWS S3 Account details required (config.json)*

Run `npm run mail` to build as above, then send to specified email address for testing. *SMTP server details required (config.json)*

Run `npm run zip` to build as above, then zip HTML and images for easy deployment to email marketing services.
