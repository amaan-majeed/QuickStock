const express = require("express");
const router = express.Router();
const protect = require("../Middleware/authMiddleware");
const {
  createProduct,
  getProducts,
  getProduct,
  deleteProduct,
  updateProduct,
} = require("../controller/productController");

router.post("/", protect, createProduct);
router.patch("/:id", protect, updateProduct);
router.get("/", protect, getProducts);
router.get("/:id", protect, getProduct);
router.delete("/:id", protect, deleteProduct);

module.exports = router;
