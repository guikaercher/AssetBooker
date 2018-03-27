const {expect} = require('chai');
const { Pool, Client } = require('pg');

describe('Base Repository', () => {

	it('should connect to the DB and run a select statement', () => {

		const pool = new Pool({
			user: 'asset_booker_app',
			host: 'asset-booker.cyvpbcsioydt.sa-east-1.rds.amazonaws.com',
			database: 'asset_booker',
			password: 'asset_booker22',
			port: 5432,
		});
		pool.query('SELECT * from asset_booker.test', (err, res) => {
			console.log(err, res);
			pool.end();
		});
	});
});
