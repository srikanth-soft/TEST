import express from "express";
import {
  getAllVendor,
  createVendor,
  deleteVendor,
  updateVendorById,
  getVendorById,
} from "../controllers/Vendor.controller.js";
import { uploadMultiple } from "../utils/multer.js";

const router = express.Router();

router.get("/Vendor", getAllVendor);
router.get("/Vendor/:VendorId", getVendorById);
router.post("/Vendor", uploadMultiple, createVendor);
router.put("/Vendor/:VendorId", updateVendorById);
router.delete("/Vendor/:VendorId", deleteVendor);
export default router;
