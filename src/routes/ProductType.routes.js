import express from "express";
import {
  createProductType,
  getAllProductTypes,
  getProductTypeById,
  updateProductTypeById,
  deleteProductTypeById,
} from "../controllers/ProductType.controller.js";
import upload from "../utils/multer.js";


const router = express.Router();
router.post("/ProductTypes",upload.single("file"), createProductType);
router.get("/ProductTypes", getAllProductTypes);
router.get("/ProductTypes/:ProductTypeId", getProductTypeById);
router.put("/ProductTypes/:ProductTypeId", updateProductTypeById);
router.delete("/ProductTypes/:ProductTypeId", deleteProductTypeById);

export default router;
