const { user } = require("../models");

class userController {
  static renderHello(req, res) {
    res.send("hello");
  }

  static viewAll(req, res) {
    user
      .findAll({
        order: [["id", "ASC"]],
      })
      .then((data) => {
        res.render("users", { data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  static viewById(req, res) {
    const id = req.params.id;
    user
      .findByPk(id)
      .then((data) => {
        // karena di ejs untuk menampilkan datanya data wajib berupa array, karena nampilin datanya itu prosesnya nge loop data, maka dari itu datanya dibuat menjadi arrray
        data = [data];
        res.render("users", { data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  static viewByUser(req, res) {
    const user = req.params.user;
    user
      .findOne({
        where: { user: user },
      })
      .then((data) => {
        data = [data];
        res.render("users", { data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  static getAddForm(req, res) {
    res.render("users/add");
  }

  static addUser(req, res) {
    // bikin penampung object buat input data ke db
    let newuser = {
      user: req.body.user,
      password: req.body.password,
    };

    user
      .create(newuser)
      .then((_) => {
        res.redirect("/users");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  static getEditForm(req, res) {
    const id = req.params.id;
    user
      .findByPk(id)
      .then((data) => {
        console.log(data);
        res.render("users/edit", { data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  static editUser(req, res) {
    const id = req.params.id;
    let updateduser = {
      user: req.body.user,
      password: req.body.password,
    };
    user
      .update(updateduser, {
        where: {
          id: id,
        },
      })
      .then(() => {
        res.redirect("/users");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  static deleteUser(req, res) {
    const id = req.params.id;
    user
      .destroy({
        where: { id: id },
      })
      .then(() => {
        res.redirect("/users");
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

module.exports = userController;
