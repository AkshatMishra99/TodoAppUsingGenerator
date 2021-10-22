const Sequelize = require("sequelize");
const dbConn = require("../../util/database");
const todoSchema = dbConn.define("Todo", {
	id: {
		type: Sequelize.UUID,
		defaultValue: Sequelize.UUIDV4,
		allowNull: false,
		primaryKey: true
	},
	todo: {
		type: Sequelize.STRING,
		allowNull: false
	},
	done: {
		type: Sequelize.BOOLEAN,
		defaultValue: false
	}
});

module.exports = todoSchema;
