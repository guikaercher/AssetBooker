module.exports = (mongoose) => {

	const connection = mongoose.connect('mongodb://localhost/test');
	connection
		.then(() => {
			console.log('sucesso');
		})
		.catch(() => {
			console.log('erro');
		});

	this.create = (genericEntity) => {
		genericEntity.save((err, data) => {
			console.log(err || data);
		});
	};

	return this;

};