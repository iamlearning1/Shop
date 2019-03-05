const express = require("express");

const router = express.Router();

const products = [];

// /admin/add-product => GET
router.get("/add-product", (req, res) => {
  // res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
  res.render("add-product", { title: "Add Product", path: "/add-product" });
});

// /admin/add-product => POST
router.post("/add-product", (req, res) => {
  products.push({ title: req.body.title });
  res.redirect("/");
});

exports.routes = router;
exports.products = products;
