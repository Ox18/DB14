var bodyParser = require("body-parser");

module.exports = {
	encoded: bodyParser.urlencoded({ extended: true }),
	json: bodyParser.json(),
};
