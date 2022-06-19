const { Router } = require("express");
const express = require("express");
const { readdirSync } = require("fs");
const { join } = require("path");
const path = require("path");

module.exports = (app) => {
	const router = Router();
	app.use(
		"/static",
		express.static(path.join(__dirname + "/../resources"))
	);
	app.use("/", router);
	readdirSync(join(__dirname, "../routes")).map(async (file) => {
		if (file.endsWith(".js")) {
			await require(`../routes/${file}`)(router);
		}
	});
};