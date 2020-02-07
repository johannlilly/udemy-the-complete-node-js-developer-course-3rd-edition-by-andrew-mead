const chalk = require('chalk');
const fs = require('fs');

const getNotes = function() {
  return 'Your notes...';
}

const addNote = function (title, body) {
  const notes = loadNotes();
  const duplicateNotes = notes.filter(function(note) {
    return note.title === title;
  });

  if (duplicateNotes.length === 0) {
    notes.push({
      title: title,
      body: body
    });

    saveNotes(notes);
    console.log(chalk.green.inverse("New note added!"));
  } else {
    console.log(chalk.magenta.inverse("Note title taken!"));
  }

}

const removeNote = function(title) {
  const notes = loadNotes();
  const notesToKeep = notes.filter(function(note) {
    return note.title !== title;
  });
  if (notesToKeep.length < notes.length) {
    saveNotes(notesToKeep);
    console.log(chalk.red.inverse("Note removed!"));
  } else if (notesToKeep.length === notes.length) {
    console.log(chalk.magenta.inverse("No note with that title was found."));
  }
}

const saveNotes = function(notes) {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJSON);
}

const loadNotes = function() {
  try {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);  
  } catch (e) {
    return [];
  }
}

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote
};