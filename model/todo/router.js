const controller = require("./controller");
const Router = require("express").Router;
const { body } = require("express-validator");
const validator = require("../../utils/validator");
const router = new Router();

router
	.route("/")
	.get((...args) => controller.findAll(...args))
	.post(
		[
			body("todo")
				.isLength({ min: 3 })
				.withMessage("Todo must be at least 3 characters long!!")
		],
		validator,
		(...args) => controller.create(...args)
	);

router
	.route("/:id")
	.put(
		[
			body("todo")
				.isLength({ min: 3 })
				.withMessage("Todo must be at least 3 characters long!!")
		],
		validator,
		(...args) => controller.update(...args)
	)
	.get((...args) => controller.findById(...args))
	.delete((...args) => controller.remove(...args));

module.exports = router;
