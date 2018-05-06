const {expect} = require('chai');
const mongoose = require('mongoose');
const entities = require('../../entities')(mongoose);

describe('Base Repository', () => {

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
		const asset = {
			name : 'unit-test-asset',
			description: 'this is an unit test',
			isBooked : false,
			bookedBy : ''
		};

		const baseRepository = require('../baseRepository')(mongoose);

		// ACT
		const creationStatus = await baseRepository.create(entities.asset(asset));

		// ASSERT
		expect(creationStatus.name).to.be.equal('unit-test-asset');
		expect(creationStatus.description).to.be.equal('this is an unit test');
		expect(creationStatus.isBooked).to.be.equal(false);
		expect(creationStatus.bookedBy).to.be.equal('');
	});

	it('should find all assets into the database', async () => {

		// ARRANGE
		const baseRepository = require('../baseRepository')(mongoose);

		// ACT
		const assets = await baseRepository.findAll(entities.asset);

		// ASSERT
		expect(assets).to.be.an('array');
		expect(assets[0]).to.be.an('object');
		expect(assets[0]).to.have.nested.property('_id');
		expect(assets[0]).to.have.nested.property('name');
		expect(assets[0]).to.have.nested.property('description');
		expect(assets[0]).to.have.nested.property('isBooked');
		expect(assets[0]).to.have.nested.property('bookedBy');
	});

	it('should update asset into the database', async () => {

		// ARRANGE
		const baseRepository = require('../baseRepository')(mongoose);
		const assetToUpdate = {
			name : 'unit-test-asset',
			description: 'this is an unit test',
			isBooked : false,
			bookedBy : ''
		};
		const newAsset = {
			name : 'unit-test-asset',
			description: 'this is an unit test',
			isBooked : true,
			bookedBy : ''
		};


		// ACT
		const updatedAssetObjResult = await baseRepository.update(entities.asset, assetToUpdate, newAsset);

		// ASSERT
		expect(updatedAssetObjResult).to.include(newAsset);
	});

	it('should find one asset in the database', async () => {

		// ARRANGE
		const baseRepository = require('../baseRepository')(mongoose);
		const assetToFind = {
			name : 'unit-test-asset',
			description: 'this is an unit test',
			isBooked : false,
			bookedBy : ''
		};


		// ACT
		const foundObj = await baseRepository.findOne(entities.asset, assetToFind);

		// ASSERT
		expect(foundObj).to.include(assetToFind);
	});

	it('should delete the asset in the database', async () => {

		// ARRANGE
		const baseRepository = require('../baseRepository')(mongoose);
		const assetToDelete = {
			name : 'unit-test-asset',
			description: 'this is an unit test',
			isBooked : false,
			bookedBy : ''
		};


		// ACT
		const deletedObj = await baseRepository.delete(entities.asset, assetToDelete);

		// ASSERT
		expect(deletedObj).to.include(assetToDelete);
	});

});
