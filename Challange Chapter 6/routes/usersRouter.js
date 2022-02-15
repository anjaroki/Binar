const UserController = require("../controller/UserController.js");

const usersRouter = require("express").Router();

// ambil semua data dari users di db
usersRouter.get("/hello", UserController.renderHello);
usersRouter.get("/", UserController.viewAll);
usersRouter.get("/add", UserController.getAddForm);
usersRouter.post("/add", UserController.addUser);
usersRouter.get("/:id/delete", UserController.deleteUser);
usersRouter.get("/:id/edit", UserController.getEditForm);
usersRouter.post("/:id/edit", UserController.editUser);
usersRouter.get("/:id", UserController.viewById);

module.exports = usersRouter;
