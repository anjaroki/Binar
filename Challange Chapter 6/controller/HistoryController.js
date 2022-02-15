const { history } = require("../models");

class historyController {
  static renderHello(req, res) {
    res.send("hello");
  }

  static viewAll(req, res) {
    history
      .findAll({
        order: [["id", "ASC"]],
      })
      .then((data) => {
        res.render("histories", { data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  static viewById(req, res) {
    const id = req.params.id;
    history
      .findByPk(id)
      .then((data) => {
        // karena di ejs untuk menampilkan datanya data wajib berupa array, karena nampilin datanya itu prosesnya nge loop data, maka dari itu datanya dibuat menjadi arrray
        data = [data];
        res.render("histories", { data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  static viewByUser(req, res) {
    const user = req.params.user;
    history
      .findOne({
        where: { user: user },
      })
      .then((data) => {
        data = [data];
        res.render("histories", { data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  static getAddForm(req, res) {
    res.render("histories/add");
  }

  static addHistory(req, res) {
    // bikin penampung object buat input data ke db
    let newhistory = {
      user: req.body.user,
      menang: req.body.menang,
      kalah: req.body.kalah,
      seri: req.body.seri,
    };

    history
      .create(newhistory)
      .then((_) => {
        res.redirect("/histories");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  static getEditForm(req, res) {
    const id = req.params.id;
    history
      .findByPk(id)
      .then((data) => {
        console.log(data);
        res.render("histories/edit", { data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  static editHistory(req, res) {
    const id = req.params.id;
    let updatedhistory = {
      user: req.body.user,
      menang: req.body.menang,
      kalah: req.body.kalah,
      seri: req.body.seri,
    };
    history
      .update(updatedhistory, {
        where: {
          id: id,
        },
      })
      .then(() => {
        res.redirect("/histories");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  static deleteHistory(req, res) {
    const id = req.params.id;
    history
      .destroy({
        where: { id: id },
      })
      .then(() => {
        res.redirect("/histories");
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

module.exports = historyController;
