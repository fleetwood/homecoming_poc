const utils = require('./comp/utils')
    , renderError = require('./comp/utils.rendering').renderError
    , renderUiError = require('./comp/utils.rendering').renderUiError;

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

    app.get('/api/user', (req, res) => {
        // twitter.getUser(req.query)
        //     .then(user => {
        //         res.send(user.data);
        //     })
        //     .catch(e => {
        //         res.send({ status: 500, error: e });
        //     });
    });

}

module.exports = {
    init
};
