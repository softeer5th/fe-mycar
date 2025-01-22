const models = require("../data/models.json");

exports.getModels = async (req, res) => {
    const model = req.query.name;
    res.status(200).json(models[model]);
};
