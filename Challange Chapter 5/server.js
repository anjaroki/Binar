const { text } = require("express");
const express = require("express");
const fs = require("fs");
const app = express();
const userRouter = express.Router();
const PORT = 3000;

app.use(express.static("assets"));
app.use(express.static("css"));
app.use(express.static("js"));

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const apiRouter = express.Router();
const v1 = express.Router();

app.use("/api", apiRouter);
apiRouter.use("/v1", v1);

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/play", (req, res) => {
  res.render("play");
});

app.get("/register", (req, res) => {
  res.render("register");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/", (req, res) => {
  const usersData = fs.readFileSync("data/data.json", "utf-8");
  const users = JSON.parse(usersData);
  res.render("index", {
    users,
  });
});

v1.post("/register", (req, res) => {
  const { username, password } = req.body;
  const data = fs.readFileSync("data/data.json", "utf-8");
  const parsedData = JSON.parse(data);
  const newUser = {
    id: Number(parsedData.length) + 1,
    username,
    password,
  };
  parsedData.push(newUser);
  fs.writeFileSync("data/data.json", JSON.stringify(parsedData, null, 2));
  console.log(newUser, "new user created");
  res.redirect("/");
});

v1.post("/login", (req, res) => {
  const { username, password } = req.body;
  const data = fs.readFileSync("data/data.json", "utf-8");
  const parsedData = JSON.parse(data);
  const userFound = parsedData.find((user) => user.username == username);
  if (!userFound) {
    // console.log("gagal");
    res.redirect("login");
    message: "data belum ada";
    massageClass: "alert-danger";
  } else if (userFound.password == password) {
    // console.log("berhasil");
    res.redirect("/play");
  } else {
    // console.log("belum punya");
    res.redirect("login");
    message: "password yang anda masukan salah";
    massageClass: "alert-danger";
  }
});

app.listen(PORT, () => {
  console.log(`running server ${PORT}`);
});
