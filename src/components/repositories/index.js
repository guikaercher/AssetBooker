module.exports = () => {
	const baseRepository = require('./baseRepository.js');

	return {
		assetRepository : require('./assetRepository.js')(baseRepository),
	};

};