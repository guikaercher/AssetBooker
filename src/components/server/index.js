module.exports = () => {
	const express = require('express');
	const bodyParser = require('body-parser');
	const app = express();
	app.use(bodyParser.json());

	require('./routes')(express, app);
	require('./server')(app);

	return app;
};