const u = require('./../comp/utils');

class Guid {
    constructor(salt = 'XXXX-9999-XXXX') {
        return u.guid(salt);
    }
}

module.exports = Guid;
