const { readFile, writeFile } = require('fs')

const buildPath = (fileName) => __dirname + '/../data/' + fileName + '.json';

module.exports = {

    loadJsonData : async (fileName) => {

        const path = buildPath(fileName);

        return new Promise((resolve, reject) => {
            readFile(path, {encoding : 'utf-8'}, (err, data) =>{

                if(err) {
                    return reject(new Error('Error on read Json file'));
                }

                try {
                    return resolve(JSON.parse(data));    
                }

                catch (errJson) {
                    return reject(new Error('Error on parse Json file'));
                }
            });
        })
    }, 

    saveJsonData : async (fileName, data) => {

        const path = buildPath(fileName);

        return new Promise((resolve, reject) => {
            const jsonData = JSON.stringify(data);
            writeFile(path, jsonData, (err) => {

                if(err) {
                    reject(new Error('Error on save'))
                }

                resolve();
            });
        })
    }
}