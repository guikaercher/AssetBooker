module.exports = (mongoose) => {
	const Schema = mongoose.Schema;
	const assetSchema = require('./asset')(Schema);
	const asset = mongoose.model('Asset', assetSchema);
	return {
		asset
	};
};
