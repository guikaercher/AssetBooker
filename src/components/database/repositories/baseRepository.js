module.exports = (mongoose) => {

	// No need to `await` on this, mongoose 4 handles connection buffering internally
	mongoose.connect('mongodb://localhost/test');

	this.create = (genericEntity) => {
		genericEntity.save((err, data) => {
			console.log(err || data);
		});
	};

	this.deleteById = (genericEntity, id) => {
		genericEntity.findByIdAndRemove(id, (err, data) => {
			console.log(err || data);
			return data;
		}
		);
	};

	this.updateById = (genericEntity, id, changeToBeMade) => {
		genericEntity.findByIdAndUpdate(
			id, changeToBeMade, {new: true},
			(err, data) => {
				console.log(err || data);
				return data;
			}
		);
	};

	this.find = (genericEntity) => {
		genericEntity.find((err, data) => {
			console.log(err || data);
			return data;
		});
	};

	this.findOne = (genericEntity , objCriteriaToFind) => {
		genericEntity.find(objCriteriaToFind, (err, data) => {
			console.log(err || data);
			return data;
		});
	};

	return this;

};