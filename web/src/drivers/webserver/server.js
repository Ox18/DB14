const ENV = require("./config/env");

(async () => {
	const setupApp = require("./config/app");
	const app = await setupApp();
	app.listen(3000, () => {
		console.log(`Server is running on port ${3000}`);
	});
})();
