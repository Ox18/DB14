const bodyParser = require("../middlewares/body-parser");
const morgan = require("../middlewares/morgan");
const helmet = require("../middlewares/helmet");
const contentType = require("../middlewares/content-type");

module.exports = function (app) {
	app.use(bodyParser.encoded);
	app.use(bodyParser.json);
	app.use(morgan);
	app.use(helmet);
	app.use(contentType);
};
