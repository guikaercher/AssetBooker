module.exports = (Schema) => {
    const assetSchema = new Schema({
        name: String,
        description: String,
        isBooked: Boolean,
        bookedBy: String,
    });
    return assetSchema;
};
