import express from "express";
import {
  createProducts,
  getAllProducts,
  getProductsById,
  updateProductsById,
  deleteProductsById,
  filterProductByCategory,
} from "../controllers/Products.controller.js";

const router = express.Router();
router.post("/Products", createProducts);
router.get("/Products", getAllProducts);
router.get("/Products/:ProductId", getProductsById);
router.put("/Products/:ProductId", updateProductsById);
router.delete("/Products/:ProductId", deleteProductsById);
router.get("/Productsfilter/:CategoryId", filterProductByCategory);

export default router;
