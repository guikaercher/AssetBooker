module.exports = (express, bodyParser) => {

	const app = express();
	app.use(bodyParser.json());

	require('./routes')(express, app);
	require('./server')(app);

	return app;
};