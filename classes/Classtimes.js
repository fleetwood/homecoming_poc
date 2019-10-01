const u = require('./../comp/utils');

class Classtimes {
    static get FRIAM() { return 'Fri AM'; }
    static get FRIPM() { return 'Fri PM'; }
    static get SATAM() { return 'Sat AM'; }
    static get SATPM() { return 'Sat PM'; }
    static get SUNAM() { return 'Sun AM'; }
    static get SUNPM() { return 'Sun PM'; }
    static random(limit = 1) {
        return [
            Classtimes.FRIAM, 
            Classtimes.FRIPM, 
            Classtimes.SATAM, 
            Classtimes.SATPM, 
            Classtimes.SUNAM, 
            Classtimes.SUNPM
        ].random(limit);
    }
}

module.exports = Classtimes;
