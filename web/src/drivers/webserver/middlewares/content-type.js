const contentType = (_req, res, next) => {
	// res.type("json");
	
	next();
};

module.exports = contentType