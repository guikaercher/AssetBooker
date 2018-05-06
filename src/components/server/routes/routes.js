module.exports = (express, assets) => {

	const router = express.Router();

	router.get('/', (req, res) => {
		res.send('Home page');
	});

	router.get('/listAssets', async (req, res) => {
		const assetList = await assets.findAll();
		res.send(assetList);
	});

	router.get('/about', (req, res) => {
		res.send('Learn about us');
	});

	return router;

};
