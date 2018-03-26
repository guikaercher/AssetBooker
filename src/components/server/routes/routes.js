module.exports = (express) => {

	const router = express.Router();
	
	router.get('/', (req, res) => {
		res.send('Home page');
	});

	router.get('/about', (req, res) => {
		res.send('Learn about us');
	});

	return router;

};
