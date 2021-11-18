const aideMermoire = {
 
    birthday: () => {
        let date = new Date('06/23/2022 00:00:00');
        let auj = new Date();
        let souve = Math.abs(date - auj);
        console.log("Il reste " + Math.floor(souve / (24*60*60*1000)) + " jours avant mon Anniversaire !");
    },
  
    christmas: () => {
        let date = new Date('12/25/2021 00:00:00');
        let auj = new Date();
        let souve = Math.abs(date - auj);
        console.log("Il reste " + Math.floor(souve / (24*60*60*1000)) + " jours avant Noel !");
    },
 
    vac: () => {
        let date = new Date('06/30/2022 00:00:00');
        let auj = new Date();
        let souve = Math.abs(date - auj);
        console.log("Il reste " + Math.floor(souve / (24*60*60*1000)) + " jours avant les vacances d'été !");
    }
 
}
 
module.exports = aideMermoire;