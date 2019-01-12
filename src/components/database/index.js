module.exports = (mongoose) => {
    const entities = require("./entities")(mongoose);
    const repositories = require("./repositories")(mongoose, entities);

    return repositories;
};
