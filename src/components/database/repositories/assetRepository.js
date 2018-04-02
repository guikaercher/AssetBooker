module.exports = (baseRepository, entities) => {

	this.create = (obj) => {
		const asset = entities.asset(obj);
		baseRepository.create(asset);
	};

	return this;
};