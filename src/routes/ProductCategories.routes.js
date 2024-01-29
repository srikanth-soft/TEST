import express from "express";
import {
  getAllCategories,
  createProductCategories,
  deleteProductCategories,
  updateProductCategoriesById,
  getProductCategoriesById,
} from "../controllers/ProductCategories.controller.js";
import upload from "../utils/multer.js";

const router = express.Router();

router.get("/ProductCategories", getAllCategories);
router.get("/ProductCategories/:ProductCategoriesId", getProductCategoriesById);
router.post("/ProductCategories",upload.single("file"),  createProductCategories);
router.put(
  "/ProductCategories/:ProductCategoriesId",
  updateProductCategoriesById
);
router.delete(
  "/ProductCategories/:ProductCategoriesId",
  deleteProductCategories
);
export default router;
