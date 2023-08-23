require("dotenv").config();

const express = require("express");
const app = express();
const port = 5006;
const Fruit = require("./models/fruit.js");
const Vegetable = require("./models/vegetable.js");
// const fruits = require("./models/fruits.js");
// const vegetables = require("./models/vegetables.js");
const { default: mongoose } = require("mongoose");

//CONNECT WITH MONGOOSE
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // useCreateIndex: true
});

mongoose.connection.once("open", () => {
  console.log("connected to  mongoDB");
});

//setting up view engine
app.set("views", __dirname + "/views");
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

//MIDDLEWARE

app.use((req, res, next) => {
  console.log("I run for all routes!");
  next();
});
app.use(express.urlencoded({ extended: false }));

//ROUTES

//Home
app.get("/", (req, res) => {
  res.send(`
    <a href='/fruits'>Fruits</a>
    <a href='/vegetables'>Vegetables</a>
`);
});

//Fruits
//Index
app.get("/fruits", async function (req, res) {
  const foundFruits = await Fruit.find({});
  res.render("fruits/Index", {
    fruits: foundFruits,
  });
});

//New
app.get("/fruits/new", (req, res) => {
  res.render("fruits/New");
});

//CREATE = POST

app.post("/fruits", async (req, res) => {
  console.log(req.body);
  if (req.body.readyToEat === "on") {
    req.body.readyToEat = true;
  } else {
    req.body.readyToEat = false;
  }
  const createdFruit = await Fruit.create(req.body);
  console.log(createdFruit);
  res.redirect("/fruits");
});

//Show
app.get("/fruits/:id", async (req, res) => {
  const oneFruit = await Fruit.findById(req.params.id);
  res.render("fruits/Show", {
    fruit: oneFruit,
  });
});

//Vegetables
//Index
app.get("/vegetables", async function (req, res) {
  const foundVegetables = await Vegetable.find({});
  res.render("vegetables/Index", {
    vegetables: foundVegetables,
  });
});

//New
app.get("/vegetables/new", (req, res) => {
  res.render("vegetables/New");
});

//CREATE = POST

app.post("/vegetables", async (req, res) => {
  console.log(req.body);
  if (req.body.readyToEat === "on") {
    req.body.readyToEat = true;
  } else {
    req.body.readyToEat = false;
  }
  const createdVegetable = await Vegetable.create(req.body);
  console.log(createdVegetable);
  res.redirect("/vegetables");
});

app.get("/vegetables/:id", async (req, res) => {
  const oneVegetable = await Vegetable.findById(req.params.id);
  res.render("vegetables/Show", {
    vegetable: oneVegetable,
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
