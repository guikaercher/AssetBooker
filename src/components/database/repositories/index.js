module.exports = (mongoose,entities) => {
	const baseRepository = require('./baseRepository.js')(mongoose);
	const assetRepository = require('./assetRepository.js')(baseRepository, entities);
	const otherRepositoriesShouldBeLikeThis = {};

	return {
		assetRepository,
		otherRepositoriesShouldBeLikeThis
	};

};