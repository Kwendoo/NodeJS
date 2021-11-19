'use strick';

const { utc } = require('moment');
const moment = require('moment');
const mongoose = require('mongoose');
const Person = require('./models/person.js');
const Message = require('./models/message.js')

// Configuration est connection

console.log('Demo mongoDB');
require('./database.js')


// Utilisation d'un model

const addAntoine = () => {

    const antoine = new Person({
        firstName : 'Antoine',
        lastName : 'Lagna',
        birthdate : moment.utc({year : 1993, month : 5, day : 23})
    });
    
    antoine.save((err, data) => {
        if(err) {
            console.log(err);
            return;
        }
    
        console.log('Antoine est bien ajouté dans la DB!');
        console.log(data);
    });
};
// addAntoine();

const addMessage = (title, description, priority, author) => {

    const message = new Message({
        title : title,
        description : description,
        priority : priority,
        author : author ?? 'Inconnu'
    });

    message.save().then(() => {
        console.log('Message enregistré !');
    }).catch((e) => {
        console.log(e);
        console.log('Bad message !');
    });
}

// addMessage('Hello World', 'Ceci est une description',5,'Antoine');
// addMessage('Message 1', 'Pomme', 3, 'Antoine');
// addMessage('Message 2', 'Poire', 5, 'Riri');
// addMessage('Message 3', 'Pèche', 4, 'Liam');
// addMessage('Message 4', 'Prune', 1, 'Elisabeth');
// addMessage('Message 5', 'Pistache', 2, 'Lohan');



// Faire des queries
(async () => {
    // - Get all message
    const messages = await Message.find();
    // console.log(messages);

    
    // - Get 1 message -> 6197c412fc5804ecd5bcac6e
    const messageById = await Message.findById('6197c412fc5804ecd5bcac6e')
    console.log(messageById);

    // - Mettre à jour un message -> 6197c412fc5804ecd5bcac6e
    const messageUpdate = await Message.findByIdAndUpdate('6197c412fc5804ecd5bcac6e', {
        title : 'Mise à jour',
        description : 'Nouvelle valeur',
        author : 'Liam'
    });
    console.log(messageUpdate);
})()