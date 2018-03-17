function asset (name, description, isBooked, bookedBy) {
	this.name = name;
	this.description = description;
	this.isBooked = isBooked;
	this.bookedBy = bookedBy;
	return this;
}

module.exports = asset;