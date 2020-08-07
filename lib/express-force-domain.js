'use strict';

/**
 * Intercepts requests ad 301 redirects to correct domain
 * @returns {function} express middleware
 */
module.exports = function (domain) {

    if (!domain || domain === '') throw new Error('Invalid domain');

    return function (req, res, next) {

        var protocol = req.protocol;

        if (domain === req.host) {
            next();
        }
        else {
            // domain does not match, redirect using same protocol
            res.redirect(301, protocol + '://' + domain + req.url);
        }
    };
};
