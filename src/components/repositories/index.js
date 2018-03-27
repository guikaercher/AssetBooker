module.exports = () => {
	const { Pool, Client } = require('pg');
	const baseRepository = require('./baseRepository.js')(Pool, Client);

	return {
		assetRepository : require('./assetRepository.js')(baseRepository),
	};

};