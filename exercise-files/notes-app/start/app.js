const fs = require('fs');

fs.writeFileSync('notes.txt', 'My name is Vengeance.');

fs.appendFileSync('notes.txt', '\nI am the night.');