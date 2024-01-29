import ProductType from "../models/ProductType.model.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";

export const createProductType = async (req, res) => {
  try {
    const { productTypeName, description } = req.body;
    const pathFile = req.file.path;
    const result = await uploadOnCloudinary(pathFile);

    const imageUrl = result.secure_url;
    const newProductType = new ProductType({
      productTypeName,
      description,
      status: false,
      image: imageUrl,
    });
    const response = await newProductType.save();
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
      data: { error: error.message },
    });
  }
};

export const getAllProductTypes = async (req, res) => {
  try {
    const response = await ProductType.find();
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

export const getProductTypeById = async (req, res) => {
  try {
    const response = await ProductType.findById(req.params.ProductTypeId);
    if (!response) {
      res
        .status(404)
        .json({ code: 404, status: "Product Type not found", data: {} });
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

export const updateProductTypeById = async (req, res) => {
  try {
    const response = await ProductType.findByIdAndUpdate(
      req.params.ProductTypeId,
      req.body,
      { new: true }
    );
    if (!response) {
      res
        .status(404)
        .json({ code: 404, status: "Product Type not found", data: {} });
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

export const deleteProductTypeById = async (req, res) => {
  try {
    const response = await ProductType.findByIdAndDelete(
      req.params.ProductTypeId
    );
    if (!response) {
      console.log(res);
      res
        .status(404)
        .json({ code: 404, status: "Product Type not found", data: {} });
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
