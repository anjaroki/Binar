const HistoryController = require("../controller/HistoryController.js");

const historiesRouter = require("express").Router();

// ambil semua data dari histories di db
historiesRouter.get("/hello", HistoryController.renderHello);
historiesRouter.get("/", HistoryController.viewAll);
historiesRouter.get("/add", HistoryController.getAddForm);
historiesRouter.post("/add", HistoryController.addHistory);
historiesRouter.get("/:id/delete", HistoryController.deleteHistory);
historiesRouter.get("/:id/edit", HistoryController.getEditForm);
historiesRouter.post("/:id/edit", HistoryController.editHistory);
historiesRouter.get("/:id", HistoryController.viewById);

module.exports = historiesRouter;
