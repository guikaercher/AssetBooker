const {expect} = require('chai');

describe('Asset Repository', () => {

	it('should connect to the DB', async () => {
		const mongoose = require('mongoose');
		const connectionObject = await mongoose.connect('mongodb://localhost/test');
		const connectionTests = connectionObject.connections[0];
		expect(connectionTests._hasOpened).to.be.equal(true);
		expect(connectionTests.host).to.be.equal('localhost');
		expect(parseInt(connectionTests.port)).to.be.equal(27017);
		mongoose.connection.close();
	});

	it('should create an asset into the database', async () => {

		// ARRANGE
		const mongoose = require('mongoose');
		const entities = require('../../entities')(mongoose);
		const asset = {
			name : 'unit-test-asset',
			description: 'this is an unit test',
			isBooked : false,
			bookedBy : ''
		};

		const baseRepository = require('../baseRepository')(mongoose);

		//ACT
		const creationStatus = await baseRepository.create(entities.asset(asset));

		//ASSERT
		expect(creationStatus.name).to.be.equal('unit-test-asset');
		expect(creationStatus.description).to.be.equal('this is an unit test');
		expect(creationStatus.isBooked).to.be.equal(false);
		expect(creationStatus.bookedBy).to.be.equal('');
	});

});