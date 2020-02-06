const validator = require('validator');
const getNotes = require('./notes.js');
const chalk = require('chalk');

const msg = getNotes();
console.log(msg);

console.log(validator.isURL('https://github.com'));

const greenMsg = chalk.blue.inverse.bold('Success');
console.log(greenMsg);