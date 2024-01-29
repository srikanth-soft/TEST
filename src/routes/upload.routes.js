import express from "express";
import upload from "../utils/multer.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";

const router = express.Router();

router.post("/", upload.single("file"), async (req, res) => {
  try {
    const pathFile = req.file.path;
    const result = await uploadOnCloudinary(pathFile);

    const imageUrl = result.secure_url;
    res.status(201).json({
      code: 201,
      status: "Success!",
      data: { results: imageUrl },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      code: 500,
      status: "An error occurred!",
      data: { error: error.message },
    });
  }
});
export default router;
