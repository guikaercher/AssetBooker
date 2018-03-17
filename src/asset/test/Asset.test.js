const {expect} = require('chai'); 

describe('Asset', () => {

	it('should instanciate an asset properly', () => {

		const name = 'test-asset';
		const description = 'this is an asset for testing porpouse';
		const isBooked = false;
		const bookedBy =  {};

		const asset = require('../../asset')();
		asset.name = 'test-asset';
		asset.description = 'this is an asset for testing porpouse';
		asset.isBooked = false;
		asset.bookedBy = {};

		expect(asset.name).to.be.equal(name);
		expect(asset.description).to.be.equal(description);
		expect(asset.isBooked).to.be.equal(isBooked);
		expect(asset.bookedBy).to.be.deep.equal(bookedBy);
	});
});