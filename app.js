console.log('Starting app;');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');
//const os =require('os');

const notes =require('./notes.js');
const titleOptions = {
        describe: 'Title of note',
        demand: true,
        alias: 't'
}
//const argv= yargs.argv;
const argv = yargs
    .command('add','Adding a note',{
        title : titleOptions,
        body:{
            describe: 'Body of note',
            demand : true,
            alias: 'b'
        }
    })
    .command('list','List all notes')
    .command('read','Read a note',{
        title : titleOptions
    })
    .command('remove','removing given note',{
        title : titleOptions
    })
    .help()
    .argv;
var command = argv._[0]; //very imp

 //var filteredArray = _.uniq(['mohit','mohit',1]);
 //console.log(filteredArray);
//var res = notes.add(4,5);
//console.log(res);
//var user = os.userInfo();
//console.log(user);
//fs.appendFileSync('greetings.txt','Hello'+user.username+'!' + 'You are'+notes.age+'.');
//fs.appendFileSync('greetings.txt','Hello World!');
//fs.appendFileSync('greetings.txt','Hello World ${user.username}!');
//console.log(_.isString(true));
//console.log(_.isString('Mohit'));
console.log('command:',command);
//console.log('Process',process.argv);
console.log('Yargs',argv);

if(command === 'add'){
    //console.log('Adding new note');
    var note = notes.addNote(argv.title,argv.body);
    if(note){
        console.log('note created');
        notes.logNote(note);
    } else{
        console.log('note already exist');
    }
} else if(command ==='list') {
    //console.log('Listing all notes');
    var all = notes.getAll();
    console.log('printing '+ all.length + ' note(s)' );

    all.forEach((note)=> notes.logNote(note));
}   else if(command === 'read'){
     var note = notes.getit(argv.title);
     if(note){
         console.log('note readed');
         notes.logNote(note);
     }else{
         console.log('note not found');

     }
}  else if(command === 'remove'){
    var noteRemoved = notes.rem(argv.title);
    var msg = noteRemoved ? 'Note was removed' : 'note not found';
     console.log(msg);
} else {
    console.log('command not supported');
}