const correctionAideMemoire = require("./modules/correctionAideMermoire");
const fs = require('fs');


//Exercice 02

fs.writeFile("./data/birthDate.txt", correctionAideMemoire.birthday(), (error) => {
    if (error) {
        console.log(error);
    }

    else {
        console.log("Ecriture du fichier");
    }
})

fs.writeFile("./data/christMas.txt", correctionAideMemoire.christmas(), (error) => {
    if (error) {
        console.log(error);
    }

    else {
        console.log("Ecriture du fichier");
    }
})

fs.writeFile("./data/holiDay.txt", correctionAideMemoire.holiday(), (error) => {
    if (error) {
        console.log(error);
    }

    else {
        console.log("Ecriture du fichier");
    }
})