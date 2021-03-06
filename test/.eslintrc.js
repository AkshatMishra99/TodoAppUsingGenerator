module.exports = {
	extends: ["airbnb", "plugin:prettier/recommended"],
	plugins: ["prettier"],
	rules: {
		"prettier/prettier": [
			"error",
			{
				"endOfLine": "auto",
				"singleQuote": true,
				"printWidth": 115,
				"trailingComma": "none",
				"space-before-function-paren": false
			}
		],
		"no-multi-spaces": 0,
		"no-underscore-dangle": [0],
		"consistent-return": 0,
		"no-unused-expressions": [2, { allowShortCircuit: true }],
		"no-param-reassign": 0,
		"func-names": 0,
		"comma-dangle": [2, "never"],
		"no-shadow": 0,
		"guard-for-in": 0,
		"no-restricted-syntax": [2, "WithStatement"],
		"newline-per-chained-call": [2, { ignoreChainWithDepth: 5 }],
		"space-in-parens": 0,
		"key-spacing": 0,
		"no-unused-vars": [1, { vars: "all", args: "none" }],
		"max-len": 0,
		"padded-blocks": 0,
		"no-console": 0,
		"no-continue": 0,
		"import/no-extraneous-dependencies": 0,
		"import/newline-after-import": 0,
		"no-mixed-operators": 0,
		"class-methods-use-this": 0,
		"no-await-in-loop": 0,
		"space-before-function-paren": 0,
		"no-async-promise-executor": 0,
		"global-require": 0
	},
	globals: {
		sequelizes: true,
		redisClient: true,
		log: true,
		esClient: true,
		describe: true,
		before: true,
		it: true,
		request: true,
		expect: true,
		app: true,
		after: true
	}
};
