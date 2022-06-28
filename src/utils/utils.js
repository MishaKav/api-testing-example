const Url = require('url-parse');

const parseUrl = (url) => new Url(url);

module.exports.parseUrl = parseUrl;