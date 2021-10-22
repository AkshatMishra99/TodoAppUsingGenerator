module.exports = {
	db: {
		username: "root",
		password: "Zedith@9903",
		database: "todo_testing",
		setting: {
			host: "localhost",
			dialect: "mysql",
			pool: {
				max: 1000,
				min: 0,
				idle: 10000,
				acquire: 10000
			},
			dialectOptions: {
				supportBigNumbers: true,
				bigNumberStrings: true,
				multipleStatements: true
			},
			replication: {
				read: [
					{
						host: "localhost",
						username: "root",
						password: "Zedith@9903"
					}
				],
				write: {
					host: "localhost",
					username: "root",
					password: "Zedith@9903"
				}
			},
			logging: true
		}
	},
	port: 3000,
	isTesting: true
};
