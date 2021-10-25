const express = require("express");
const helmet = require("helmet");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const bluebird = require("bluebird");
const config = require("config");
const routes = require("./routes");
const dbConn = require("./utils/database");
const serverUtils = require("./utils/serverUtils");
const app = express();

app.use(helmet());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan("tiny"));

app.use("/", routes);

const startApp = () => {
	app.listen(config.get("port"), () => {
		console.log(`Magic happens on port ${config.get("port")}`);
	});
};

if (config.get("isTesting")) {
	startApp();
} else {
	serverUtils.boot(app).then(() => {
		startApp();
	});
}

module.exports = app;
