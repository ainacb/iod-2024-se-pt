const express = require("express");
const {
  getAllProducts,
  getCategories,
} = require("../controllers/productsController");

const router = express.Router();
router.get("/", getAllProducts);
router.get("/categories", getCategories);

module.exports = router;
