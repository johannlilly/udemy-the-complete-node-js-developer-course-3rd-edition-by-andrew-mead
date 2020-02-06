const chalk = require('chalk');
const yargs = require('yargs');
const getNotes = require('./notes.js');

// Customize yargs version
yargs.version('1.0.0');

// Create add command
yargs.command({
  // options object to customize how the command will work
  command: 'add',
  describe: 'Add a new note',
  handler: function () { // runs upon calling command
    console.log('Adding a new note!');
  }
});

// Create remove command
yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  handler: function() {
    console.log('Removing the note')
  }
});

// Create read command
yargs.command({
  command: 'read',
  describe: 'Read a note',
  handler: function() {
    console.log('Reading the note')
  }
});

// Create list command
yargs.command({
  command: 'list',
  describe: 'List notes',
  handler: function() {
    console.log('Listing notes')
  }
});

console.log(yargs.argv);