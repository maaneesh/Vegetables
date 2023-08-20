const express = require("express");
const app = express();
const port = 5006;
const fruits = require("./models/fruits.js");
const vegetables = require("./models/vegetables.js");

//setting up view engine
app.set("views", __dirname + "/views");
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

//ROUTES

//Fruits
app.get("/fruits", (req, res) => {
  res.render("fruits/Index", {
    fruits: fruits,
  });
});

app.get("/fruits/:index", (req, res) => {
  res.render("fruits/Show", {
    fruit: fruits[req.params.index],
  });
});

//Vegetables
app.get("/vegetables", (req, res) => {
  res.render("vegetables/Index", {
    vegetables: vegetables,
  });
});

app.get("/vegetables/:index", (req, res) => {
  res.render("vegetables/Show", {
    vegetables: vegetables[req.params.index],
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
