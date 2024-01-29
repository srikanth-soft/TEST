import { Router } from "express";
import ProductType from "./ProductType.routes.js";
import ProductCategories from "./ProductCategories.routes.js";
import Vendor from "./vendor.routes.js";
import Products from "./Products.routes.js";
import upload from "./upload.routes.js";

const router = Router();
router.use("/", Products);
router.use("/", ProductType);
router.use("/", ProductCategories);
router.use("/", Vendor);
router.use("/upload", upload);

export default router;
