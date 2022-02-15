const { biodata } = require("../models");

class biodataController {
  static renderHello(req, res) {
    res.send("hello");
  }

  static viewAll(req, res) {
    biodata
      .findAll({
        order: [["id", "ASC"]],
      })
      .then((data) => {
        res.render("biodata", { data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  static viewById(req, res) {
    const id = req.params.id;
    biodata
      .findByPk(id)
      .then((data) => {
        // karena di ejs untuk menampilkan datanya data wajib berupa array, karena nampilin datanya itu prosesnya nge loop data, maka dari itu datanya dibuat menjadi arrray
        data = [data];
        res.render("biodata", { data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  static viewByEmail(req, res) {
    const email = req.params.email;
    biodata
      .findOne({
        where: { email: email },
      })
      .then((data) => {
        data = [data];
        res.render("biodata", { data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  static getAddForm(req, res) {
    res.render("biodata/add");
  }

  static addBiodata(req, res) {
    // bikin penampung object buat input data ke db
    let newbiodata = {
      user: req.body.user,
      email: req.body.email,
    };

    biodata
      .create(newbiodata)
      .then((_) => {
        res.redirect("/biodata");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  static getEditForm(req, res) {
    const id = req.params.id;
    biodata
      .findByPk(id)
      .then((data) => {
        console.log(data);
        res.render("biodata/edit", { data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  static editBiodata(req, res) {
    const id = req.params.id;
    let updatedbiodata = {
      user: req.body.user,
      email: req.body.email,
    };
    biodata
      .update(updatedbiodata, {
        where: {
          id: id,
        },
      })
      .then(() => {
        res.redirect("/biodata");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  static deleteBiodata(req, res) {
    const id = req.params.id;
    biodata
      .destroy({
        where: { id: id },
      })
      .then(() => {
        res.redirect("/biodata");
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

module.exports = biodataController;
