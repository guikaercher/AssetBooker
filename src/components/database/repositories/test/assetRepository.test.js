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

});