module.exports = (mongoose) => {

    this.create = async (genericEntity) => {
    const creationStatus = await genericEntity.save();
    return creationStatus;
    };

    this.findAll = async (genericEntity) => {
    const findResult = await genericEntity.find({});
    return findResult;
    };

    this.update = async (genericEntity, query, updateObj) => {
    const updateStatus = await genericEntity.findOneAndUpdate(query, {$set:updateObj}, {new: true});
    return updateStatus;
    };

    this.delete = async (genericEntity, obj) => {
    const objFound = await this.findOne(genericEntity, obj);
    if (!objFound || !objFound._id) throw Error('Object does not have an id');
    const deletionResult = await genericEntity.findByIdAndRemove(objFound._id);
    return deletionResult;
    };

    this.findOne = async (genericEntity , objCriteriaToFind) => {
    const findResult = await genericEntity.findOne(objCriteriaToFind);
    return findResult;
    };

    return this;

};