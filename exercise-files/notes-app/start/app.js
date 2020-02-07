const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js');

// Customize yargs version
yargs.version('1.0.0');

// Create add command
yargs.command({
  // options object to customize how the command will work
  command: 'add',
  describe: 'Add a new note',
  builder: {
    // set new option on builder object
    title: { // define with flag `--title=`
      // custsomize how option works, access with handler
      describe: 'Note title',
      demandOption: true, // is required
      type: 'string'
    },
    body: {
      describe: 'Note content',
      demandOption: true,
      type: 'string'
    }
  },
  handler: function (argv) { // runs upon calling command
    notes.addNote(argv.title, argv.body);
  }
});

// Create remove command
yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  handler: function(argv) {

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

yargs.parse();