const aideMermoire = require("./modules/aideMemoire");
const fs = require('fs');

//Demo 02

fs.readFile("./data/hello.txt", (error, data) => {
    if (error) {
        console.log(error);
    }

    console.log(data.toString());
})

fs.stat("./data/hello.txt", (error, stat) => {
    if (error) {
        console.log(error);
    }

    if (stat.isFile()) {
        console.log('Fichier');
    }

    else if (stat.isDirectory()) {
        console.log("Dossier");
    }
})

fs.writeFile("./data/goodbye.txt", 'Goodbye', (error) => {
    if (error) {
        console.log(error);
    }

    else {
        console.log("Ecriture du fichier");
    }
})