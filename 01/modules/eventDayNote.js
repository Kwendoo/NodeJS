const correctionAideMermoire = require('./correctionAideMermoire')
const fs = require("fs")
const correctionAideMemoire = require('./correctionAideMermoire')


function addText(file, text) {
    if(!fs.existsSync(file)) {
        fs.writeFile(file, text + "\n", (error) => {
            if(error) {
                console.log(error);
            }
        })
    }
    else {
        fs.readFile(fils, (error, data) => {
            if(error) {
                console.log(error);
            }
            else {
                fs.writeFile(file, data.toString() + text + "\n", (error) = {
                    if(error) {
                        console.log(error);
                    }
                })
            }
        })
    }
}

const eventDayNote = {
    christmas : function () {
        addText("./data/correcChristmax", correctionAideMemoire.christmas())
    },
    holiday : function () {
        addText("./data/correcHoliday", correctionAideMemoire.holiday())
        
    },
    birthday : function () {
        addText("./data/correcBirthDay", correctionAideMemoire.birthday())
        
    }
}