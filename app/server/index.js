'use strict';

const fs             = require('fs');
const express        = require('express');
const expressSession = require('express-session');
const ems            = require('express-mysql-session');
const https          = require('https');
const path           = require('path');

const secret         = readOrCreateSecret(path.resolve(__dirname, './config/secret.json'));

const config         = require('./config/config.js');
const Nestor         = require('./modules/nestor.js');
const pool           = require('./modules/pool.js');
const router         = require('./modules/router.js');

const app            = express();
const MySqlStore     = ems(expressSession);
const nestor         = new Nestor(path.resolve(__dirname, './logs'));
const sessionStore   = new MySqlStore({}, pool);
const sessionOptions = {
	name: 'express.sid',
	proxy: config.isProduction,
	secret: secret.cookiesSecret,
	store: sessionStore,
	resave: false,
	rolling: false,
	saveUninitialized: false,
	unset: 'keep',
	cookie: {
		domain: config.cookiesDomain,
		secure: false,
		path: '/',
		httpOnly: true,
		maxAge: (14 * 24 * 60 * 60 * 1000)
	}
};


function readOrCreateSecret(pathToFile) {
	var secret;
	
	try {
		secret = JSON.parse(fs.readFileSync(pathToFile, 'utf8'));
	} catch (error) {
		secret = { db_name: 'canopus', db_user: 'canopus', db_pass: '000', cookiesSecret: '000' };
		fs.appendFileSync(pathToFile, JSON.stringify(secret, '', 2));
		nestor.log('No "secret.json" file found. A new one was just created. You must edit it by specifying correct credentials, then relaunch app.', { type: 'warn' });
	} finally {
		return secret;
	}
}
function setReqIp(req, res, next) {
	req.realIp = req.headers['X-Forwarded-For'] || req.headers['x-forwarded-for'] || req.ip;
	next();
}
function setResHeaders(req, res, next) {
	res.set({
		'X-Frame-Options': 'DENY',
		'X-Content-Type-Options': 'nosniff',
		'X-Download-Options': 'noopen',
		'X-DNS-Prefetch-Control': 'off',
		'X-XSS-Protection': '1; mode=block',
		'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
		'Pragma': 'no-cache',
		'Expires': '0',
		'Content-Security-Policy': `default-src 'self'; style-src 'self' 'unsafe-inline'`,
	});
	
	res.removeHeader('X-Powered-By');
	
  next();
}


global.Intl = require('intl');
global.Intl.__disableRegExpRestore();


app.use(setResHeaders);
app.use(express.static(path.resolve(__dirname, '../client/build'), { index: false }));
app.use(expressSession(sessionOptions));
app.use(setReqIp);
app.use(nestor.logHttpRequest);
app.use(router);


app.listen(config.port);
nestor.watch(config.maxLogFileSize, config.logsCheckInterval); // Следить за размером логов и делать ротацию.
nestor.log(`HTTP server started on port ${config.port}.`, { type: 'info' });
