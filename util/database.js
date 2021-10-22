const Sequelize = require("sequelize");
const config = require("config");

const dbConfig = config.get("db");
module.exports = new Sequelize(dbConfig.database, null, null, dbConfig.setting);
