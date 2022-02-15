const BiodataController = require("../controller/BiodataController.js");

const biodataRouter = require("express").Router();

// ambil semua data dari biodata di db
biodataRouter.get("/hello", BiodataController.renderHello);
biodataRouter.get("/", BiodataController.viewAll);
biodataRouter.get("/add", BiodataController.getAddForm);
biodataRouter.post("/add", BiodataController.addBiodata);
biodataRouter.get("/:id/delete", BiodataController.deleteBiodata);
biodataRouter.get("/:id/edit", BiodataController.getEditForm);
biodataRouter.post("/:id/edit", BiodataController.editBiodata);
biodataRouter.get("/:id", BiodataController.viewById);
biodataRouter.get("/cari/:email", BiodataController.viewByEmail);

module.exports = biodataRouter;
