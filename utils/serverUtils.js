const Promise = require("bluebird");
const fs = Promise.promisifyAll(require("fs"));
const config = require("config");

module.exports = {
	boot: (app) =>
		new Promise(async (resolve, reject) => {
			let bootDirPath = `${__dirname}/../boot`;
			if (config.get("isTesting"))
				bootDirPath = `${__dirname}/../test/boot`;
			console.log(bootDirPath);
			const files = await fs.readdirAsync(bootDirPath);

			for (const file of files) {
				try {
					// eslint-disable-next-line import/no-dynamic-require
					await require(`${bootDirPath}/${file}`)(app);
				} catch (e) {
					return reject(e);
				}
			}

			resolve();
		})
};
