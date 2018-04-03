const {expect} = require('chai');

describe('Asset Repository', () => {

	it('should create an asset into the database', () => {

		// ARRANGE
		const mongoose = require('mongoose');
		const entities = require('../../entities')(mongoose);
		const asset = {
			name : 'String',
			description: 'String',
			isBooked : false,
			bookedBy : 'String'
		};

		const baseRepository = require('../baseRepository')(mongoose);

		//ACT
		baseRepository.create(entities.asset(asset));

		//ASSERT

	});

});