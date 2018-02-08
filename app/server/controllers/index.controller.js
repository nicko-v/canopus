'use strict';

const path = require('path');

const index_html = path.resolve(__dirname, '../../client/build/index.html');


function index(req, res) { res.sendFile(index_html); }


module.exports = index;
