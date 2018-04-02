module.exports = (mongoose) => {
	const entities = require('./entities')(mongoose);
	const repositories = require('./repositories')(mongoose, entities);

	/*
	const asset = {
		name : 'String',
		description: 'String',
		isBooked : false,
		bookedBy : 'String'
	};

	repositories.assetRepository.create(asset);
	*/

	return repositories;
};