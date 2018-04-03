module.exports = (baseRepository, entities) => {

	this.create = async (obj) => {
		const asset = entities.asset(obj);
		return await baseRepository.create(asset);
	};

	return this;
};