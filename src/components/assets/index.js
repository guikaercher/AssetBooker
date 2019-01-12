module.exports = (assetRepository) => {
    const assetsService = require("./assetsService")(assetRepository);
    return assetsService;
};
