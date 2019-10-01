const utils = require('./comp/utils');

const init = (app) => {

    ////////////////////////////////////
    // API Endpoints
    let body = {};
    app.get('/api/users', (req, res) => {
        try {
            res.send({
                status: 200,
                body
            });
        }
        catch (e) {
            renderError(res, e);
        }
    });

}

module.exports = {
    init
};
