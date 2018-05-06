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

	this.update = async (assetObj, query, updateasset) => {
		const asset = entities.asset;
		return await baseRepository.update(asset, query, updateasset);
	};

	this.delete = async (assetObj, assetToDelete) => {
		const asset = entities.asset;
		return await baseRepository.delete(asset, assetToDelete);
	};

	return this;
};