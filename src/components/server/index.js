module.exports = (express, bodyParser, assets) => {

	const app = express();
	app.use(bodyParser.json());

	require('./routes')(express, app, assets);
	require('./server')(app);

	return app;
};