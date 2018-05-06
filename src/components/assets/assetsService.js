module.exports = (assetRepository) => {
	this.findAll = async () => {
		const assetList = await assetRepository.findAll();
		return assetList;
	};

	return this;
};