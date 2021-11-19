const mongoose = require ('mongoose');

const personSchema = mongoose.Schema({
    firstName : String,
    lastName : String,
    birthdate : Date
}, {
    collection : 'person'
});

const Person = mongoose.model('person', personSchema);

module.exports = Person;