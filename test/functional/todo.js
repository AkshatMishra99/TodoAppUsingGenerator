const { expect } = require("chai");

describe("TODO", function () {
	it("should be able to fetch all todos", async () => {
		await request.get("/todo").expect(200);
	});
	it("should be able to create new todos", async () => {
		const res = await request
			.post("/todo")
			.send({ todo: "hey this year!!" })
			.expect(201);
		await expect(res.body.todo).to.equal("hey this year!!");
	});
	it("should not be able to create a todo with invalid data", async () => {
		await request.post("/todo").expect(422);
	});
	it("should be able to update a todo", async () => {
		const res = await request.get("/todo").expect(200);
		const todoId = res.body[0].id;
		console.log(todoId);
		const updateRes = await request
			.put("/todo/" + todoId)
			.send({ todo: "hey next year!!" })
			.expect(200);
		console.log(updateRes.body.todo[0].todo);
		expect(updateRes.body.todo[0]).to.includes({ todo: "hey next year!!" });
	});
	it("should not be able to update a todo with invalid data", async () => {
		const res = await request.get("/todo").expect(200);
		const todoId = res.body[0].id;
		console.log(todoId);
		await request.put("/todo/" + todoId).expect(422);
	});
	it("should be able to delete a todo", async () => {
		const res = await request.get("/todo").expect(200);
		const todoId = res.body[0].id;
		console.log(todoId);
		await request.delete("/todo/" + todoId).expect(200);
	});
});
