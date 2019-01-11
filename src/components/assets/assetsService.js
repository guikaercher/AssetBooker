module.exports = (assetRepository) => {

	this.create = async (assetObj) => {
		const creationResult = await assetRepository.create(assetObj);
		return creationResult;
	};

	this.update = async (query, updateasset) => {
		return await assetRepository.update(query, updateasset) || 'asset to update not found';
	};

	this.findAll = async () => {
		const assetList = await assetRepository.findAll();
		return assetList;
	};

	this.delete = async (assetToDelete) => {
		try {
			return await assetRepository.delete(assetToDelete) || 'asset to delete not found';
		} catch (err) {
			console.log(err);
			return err;
		}
	};

	return this;
};