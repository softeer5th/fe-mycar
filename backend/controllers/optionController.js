const colors = require("../data/colors.json");
const options = require("../data/options.json");

exports.getOptions = (req, res) => {
    const car = req.query.car;
    const model = req.query.model;

    const carModel = `${car}_${model}`;

    const previewUrl = `/images/preview/${carModel}`;

    const response = {
        ...colors[carModel],
        options: { ...options[carModel] },
        preview: previewUrl,
    };

    res.status(200).json(response);
};
