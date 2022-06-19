module.exports = (router) => {
	router.post("/ajaxLogin", (req, res) => {
		const { u, p, r } = req.body;
		// banned
		// res.json(["Por usar aimbot", "Forever", 0])
		// event open timer
		// res.json([0, 0, 0, 0])
		// establish password to account GM
		// res.json([-9])
		// login success
		// res.json([1,2,3,4,5])
		// required pass to acount facebook
		// res.json([-5, 0])
		// change password
		// res.json([-11])
		// alerta
		// res.json(["titulo", "descripcion"])

		res.json([1, 2, 3, 4, 5]);
	});
};
