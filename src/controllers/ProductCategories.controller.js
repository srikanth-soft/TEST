import ProductCategories from "../models/ProductCategories.model.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
export const createProductCategories = async (req, res) => {
  try {
    console.log(req.body)
    const { PrdCategoryName, Description, BannerImage } = req.body;
    console.log({PrdCategoryName, Description, BannerImage})

    const pathFile = req.file.path;
    const result = await uploadOnCloudinary(pathFile);

    const imageUrl = result.secure_url;
    const newProductCategories = new ProductCategories({
      PrdCategoryName,
      Description,
      Image: imageUrl,
      BannerImage:BannerImage || null,
      status: false,
    });
    const response = await newProductCategories.save();
    res.status(201).json({
      code: 200,
      status: "Success!",
      data: { results: response },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      code: 500,
      status: "An error occurred! Check server logs for more info.",
      data: {},
    });
  }
};

export const getAllCategories = async (req, res) => {
  try {
    const response = await ProductCategories.find();
    res.status(200).json({
      code: 200,
      status: "Success!",
      data: { length: response.length, results: response },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      code: 500,
      status: "An error occurred! Check server logs for more info.",
      data: {},
    });
  }
};

export const deleteProductCategories = async (req, res) => {
  try {
    const response = await ProductCategories.findByIdAndDelete(
      req.params.ProductCategoriesId
    );
    if (!response) {
      console.log(res);
      res
        .status(404)
        .json({ code: 404, status: "Product Categories not found", data: {} });
      return;
    }
    res.status(200).json({
      code: 200,
      status: "Success!",
      data: { results: response },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      code: 500,
      status: "An error occurred! Check server logs for more info.",
      data: {},
    });
  }
};

export const updateProductCategoriesById = async (req, res) => {
  try {
    const response = await ProductCategories.findByIdAndUpdate(
      req.params.ProductCategoriesId,
      req.body,
      { new: true }
    );
    if (!response) {
      res
        .status(404)
        .json({ code: 404, status: "Product Categories not found", data: {} });
      return;
    }
    res.status(200).json({
      code: 200,
      status: "Success!",
      data: { results: response },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      code: 500,
      status: "An error occurred! Check server logs for more info.",
      data: {},
    });
  }
};

export const getProductCategoriesById = async (req, res) => {
  try {
    const response = await ProductCategories.findById(
      req.params.ProductCategoriesId
    );
    if (!response) {
      res
        .status(404)
        .json({ code: 404, status: "Product Categories not found", data: {} });
      return;
    }
    res.status(200).json({
      code: 200,
      status: "Success!",
      data: { results: response },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      code: 500,
      status: "An error occurred! Check server logs for more info.",
      data: {},
    });
  }
};
