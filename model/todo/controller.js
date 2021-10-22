const Controller = require("../../lib/controller");
const todoFacade = require("./facade");

class TodoController {
	create(req, res, next) {
		todoFacade
			.create(req.body)
			.then((result) => {
				console.log(result);
				res.status(201).send(result.dataValues);
			})
			.catch((err) => next(err));
	}
	findAll(req, res, next) {
		todoFacade
			.findAll()
			.then((todosList) => {
				res.status(200).send(todosList);
			})
			.catch((err) => next(err));
	}
	update(req, res, next) {
		todoFacade
			.update(req.body, {
				where: {
					id: req.params.id
				}
			})
			.then((result) => {
				console.log(result);
				return todoFacade.findAll({ where: { id: req.params.id } });
			})
			.then((todo) => {
				res.status(201).send({
					message: "Updated Successfully",
					todo: todo
				});
			})
			.catch((err) => next(err));
	}
	findById(req, res, next) {
		todoFacade
			.findAll({ where: { id: req.params.id } })
			.then((todo) => {
				res.status(200).send(todo);
			})
			.catch((err) => next(err));
	}
	remove(req, res, next) {
		todoFacade
			.destroy({ where: { id: req.params.id } })
			.then((result) => {
				console.log(result);
				res.status(201).send("Todo Deleted Successfully!!");
			})
			.catch((err) => next(err));
	}
}

module.exports = new TodoController(todoFacade);
