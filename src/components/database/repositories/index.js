module.exports = (mongoose, entities) => {
    const mongooseUrlConnection = `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;
    mongoose.connect(mongooseUrlConnection);
    const baseRepository = require("./baseRepository.js")(mongoose);
    const assetRepository = require("./assetRepository.js")(baseRepository, entities);
    const otherRepositoriesShouldBeLikeThis = {};

    return {
        assetRepository,
        otherRepositoriesShouldBeLikeThis,
    };
};
