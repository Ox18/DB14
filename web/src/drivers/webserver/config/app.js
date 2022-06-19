const express = require("express");
const setupMiddlewares = require("./middlewares");
const setupRoutes = require("./routes");
const setupTemplateEngine = require("./template-engine");

const setupApp = async () => {
	const app = express();
	setupTemplateEngine(app);
	setupMiddlewares(app);
	setupRoutes(app);
	return app;
};

module.exports = setupApp;
