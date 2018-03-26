module.exports = () => {

	const asset = new (require('./asset'))();

	return {
		asset
	};
};
