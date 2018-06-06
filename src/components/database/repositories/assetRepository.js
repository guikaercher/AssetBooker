module.exports = (baseRepository, entities) => {

	this.create = async (assetObj) => {
		const asset = entities.asset(assetObj);
		return await baseRepository.create(asset);
	};

	this.findOne = async (objCriteriaToFind) => {
		const asset = entities.asset;
		return await baseRepository.findOne(asset, objCriteriaToFind);
	};

	this.findAll = async () => {
		const asset = entities.asset;
		return await baseRepository.findAll(asset);
	};

	this.update = async (assetToUpdate, newAsset) => {
		const asset = entities.asset;
		return await baseRepository.update(asset, assetToUpdate, newAsset);
	};

	this.delete = async (assetToDelete) => {
		const asset = entities.asset;
		return await baseRepository.delete(asset, assetToDelete);
	};

	return this;
};