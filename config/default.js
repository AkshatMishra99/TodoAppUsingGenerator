module.exports = {
	db: {
		username: "root",
		password: "Zedith@9903",
		database: "todo",
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
	port: 7700,
	isTesting: false
};
