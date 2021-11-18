const wikiquote = require("wikiquote");
const bonjour = require('./modules/bonjour')
const messager = require('./modules/message')
const aideMermoire = require("./modules/aideMemoire");
const correctionAideMemoire = require("./modules/correctionAideMermoire");
const fs = require('fs');



//Dome 01
wikiquote.searchPeople("Steve Jobs")
    .then(page => page[0])
    .then(people => wikiquote.getRandomQuote(people.title))
    .then(quote => console.log(quote))

bonjour()
messager.auRevoir()
messager.bonjour()
