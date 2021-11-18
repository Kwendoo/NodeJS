function calcul(date) {
    const today = new Date();
    if (today >= date) {

        date.setFullYear(date.getFullYear()+1);

    }

    const oneDay = 1000*60*60*24;
    return Math.floor((date.getTime()-today.getTime())/(oneDay));
}

const correctionAideMemoire = {

    christmas : function() {

        const today = new Date();
        const day = calcul(new Date(today.getFullYear(), 11, 25));
        return(day + " jours avant Noël");
        
    },

    holiday : function() {

        const today = new Date();
        const day = calcul(new Date(today.getFullYear(), 6, 1));
        return(day + " jours avant les vacances");
        
    },

    birthday : function() {

        const birthDate = new Date('06/23/2021');
        const today = new Date();
        const day = calcul(new Date(today.getFullYear(), birthDate.getMonth(), birthDate.getDay()));
        return(day + " jours avant mon anniversaire");
        
    }

}

module.exports = correctionAideMemoire;