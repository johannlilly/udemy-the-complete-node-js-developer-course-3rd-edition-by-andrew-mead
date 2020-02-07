const yargs = require('yargs');
const notes = require('./notes.js');

yargs.version('1.0.0');

yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'Note content',
      demandOption: true,
      type: 'string'
    }
  },
  handler: function (argv) {
    notes.addNote(argv.title, argv.body);
  }
});

yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    }
  },
  handler: function(argv) {
    notes.removeNote(argv.title);
  }
});

yargs.command({
  command: 'read',
  describe: 'Read a note',
  handler: function() {
    console.log('Reading the note')
  }
});

yargs.command({
  command: 'list',
  describe: 'List notes',
  handler: function() {
    console.log('Listing notes')
  }
});

yargs.parse();