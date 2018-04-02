const {expect} = require('chai');

describe('Asset Repository', () => {
	//TODO: fix this.
	it('should create an asset into the database', () => {

		const assetRepository = require('../assetRepository');
		const asset = {
			name : 'String',
			description: 'String',
			isBooked : false,
			bookedBy : 'String'
		};

		assetRepository.create(asset);

	});

});