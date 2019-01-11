module.exports = (app) => {
	const port = process.env.SERVER_PORT || 5000;

	app.listen(port, () => {
		console.log('Listening on port ' + port);
	});
};