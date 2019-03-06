const express = require("express");
const controller = require("../controllers/products");

const router = express.Router();

router.get("/add-product", controller.getAddProduct);

router.post("/add-product", controller.postAddProduct);

module.exports = router;
