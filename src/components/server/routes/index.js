module.exports = (express, app, assets) => {
	app.use('/api/v1', require('./routes.js')(express, assets));
};