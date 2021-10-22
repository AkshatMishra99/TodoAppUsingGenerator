const express = require("express");
const helmet = require("helmet");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const bluebird = require("bluebird");
const config = require("config");
const routes = require("./routes");
const dbConn = require("./util/database");
const app = express();

app.use(helmet());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan("tiny"));

app.use("/", routes);

dbConn
	.sync()
	.then(() => {
		app.listen(config.get("port"), () => {
			console.log(`Magic happens on port ${config.get("port")}`);
		});
	})
	.catch((err) => console.error(err));

module.exports = app;
