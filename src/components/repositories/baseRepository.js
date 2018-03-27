module.exports = (Pool, Client) = {

	const pool = new Pool({
		user: 'asset_booker_app',
		host: 'asset-booker.cyvpbcsioydt.sa-east-1.rds.amazonaws.com',
		database: 'asset_booker',
		password: 'asset_booker22',
		port: 5432,
	  })

	create : () => {

	},
	update : () => {

	},
	delete : () => {

	},
	select : () => {
		pool.query('SELECT NOW()', (err, res) => {
			console.log(err, res)
			pool.end()
		  })
	}
};