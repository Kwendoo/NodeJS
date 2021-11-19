const mongoose = require ('mongoose');



// const db = mongoose.connection
// console.log(db);


// Configuration de la base de donnée MongoDB

const urimongoDB = 'mongodb://127.0.0.1/exemple';

// Connection à MongoDB

mongoose.connect(urimongoDB, {
        useNewUrlParser : true, 
        useUnifiedTopology : true
    })
    .then(() => {
        console.log('Connected to MongoDB !');
    })
    .catch((e) => {
        console.log('Error on connection !');
        console.log(e.message);
        process.exit();
    })


