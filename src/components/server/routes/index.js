module.exports = (express, app) => {
	app.use('/api/v1', require('./routes.js')(express));
};