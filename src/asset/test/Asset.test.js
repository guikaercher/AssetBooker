const {expect} = require('chai'); 

describe('Asset', () => {

	it('should instanciate an asset', () => {

		// ARRANGE
		const name = 'test-asset';
		const description = 'this is an asset for testing porpouse';
		const isBooked = false;
		const bookedBy = {};

		// ACT
		const assetSingleToned =  require('../Asset.js')();
		const assetLinkedToTheFirstSingleToned =  require('../Asset.js')();
		const assetNotSingleToned = new (require('../Asset.js'))();
		const assetNotSingleTonedSecondWay = require('../Asset')();
		assetSingleToned.name = 'aaaaaa';
		assetNotSingleToned.name = 'bbbbbbb';

		//ASSERT	
		console.log(assetSingleToned.name);
		console.log(assetLinkedToTheFirstSingleToned.name);
		console.log(assetNotSingleToned.name);
		console.log(assetNotSingleTonedSecondWay.name);
		//expect(Asset.name).to.be.equal(name);
	});
});