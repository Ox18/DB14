module.exports = (router) => {
	router.get("/s", (req, res) => {
		res.json([1, 2, 3, 4, 5]);
	});
};
