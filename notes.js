const fs = require('fs');
//console.log('starting notes.js');
//module.exports.age=25;
/*module.exports.addNote = function() {
    console.log('addNote');
    return 'New Note';
};
module.exports.addNote = () => {
    console.log('addNote');
    return 'New Note';
};*/
var fetchNotes = () => {
    try {
        var notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    } catch(e){
         return [];
    }

} ;

var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json',JSON.stringify(notes));
};
var addNote = (title,body) =>{
   // console.log('Adding note',title,body);
    var notes = fetchNotes();
    var note = {
        title,
        body
    };

   var duplicateNotes = notes.filter((note) => note.title === title);
   if(duplicateNotes.length ===0){
   notes.push(note);
   saveNotes(notes);
   return note;
    }
};
var getAll = ()  =>{
    //console.log('getting all notes');
    return fetchNotes();
}
var getit = (title) => {
    //console.log('read node :'+title)
   var notes = fetchNotes();
   var filteredNotes = notes.filter((note) => note.title ===title);
   return filteredNotes[0];
}
var rem =(title) => {
    //console.log('remove :' +title);
    var notes = fetchNotes();
    var newNotes = notes.filter((note) => note.title!== title);
    saveNotes(newNotes);

    return notes.length !== newNotes.length;
}
var logNote = (note) =>{
    console.log('--');
    console.log('Title:'+note.title);
    console.log('Body:'+ note.body);
}
module.exports ={
    //addNote = addNote; feature in js to same name function
     addNote, // but in ES6 this statement is identical to above one
     getAll,
    getit,
    rem,
    logNote
}
