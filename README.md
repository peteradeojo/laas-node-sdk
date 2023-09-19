# Laas

Laas is a package that allows you to send logs to a remote server. Here's how to install and use it in your application.

## Installation

To install this package, run the following command:

```bash
npm install @peteradeojo/laas-sdk
```

## Usage

To use this package in your application, first import it:

```javascript
const laas = require('@peteradeojo/laas-sdk');
```

Set the `LAAS_APP_TOKEN` environment variable in your .env file or your environment

Then, you can use the package's `sendLog` function like this:

```javascript
const log = {
  level: 'info',
  text: 'Lorem ipsum dolor sit amet',
  context: {} // an object containing any other useful information you want to supply,
};

const result = await laas.sendLog(log);
console.log(result);
```

That's it! You're now using the `laas` package in your application.

## Contributing

If you'd like to contribute to this package, please fork the repository and create a pull request. We'd love to see your contributions!

## License

This package is licensed under the MIT license. See the LICENSE file for more information.
