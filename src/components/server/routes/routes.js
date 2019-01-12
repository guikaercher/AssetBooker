module.exports = (express, assets) => {

 const router = express.Router(); // eslint-disable-line

 router.get('/', (req, res) => {
  res.send('Hello, I`m on!');
 });

 router.get('/listAssets', async (req, res) => {
  const assetList = await assets.findAll();
  res.send(assetList);
 });

 router.post('/createAsset', async (req, res) => {
  const assetCreationResult = await assets.create(req.body);
  res.send(assetCreationResult);
 });

 router.post('/updateAsset', async (req, res) => {
  const assetUpdateResult = await assets.update(req.body.assetToUpdate, req.body.newAsset);
  res.send(assetUpdateResult);
 });

 router.post('/deleteAsset', async (req, res) => {
  const assetDeletionResult = await assets.delete(req.body);
  res.send(assetDeletionResult);
 });

 router.get('/about', (req, res) => {
  res.send('Learn about us');
 });

 return router;

};
