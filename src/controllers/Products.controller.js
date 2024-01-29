import Products from "../models/Products.model.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { ObjectId } from "mongodb";

export const createProducts = async (req, res) => {
  try {
    const { ProductCategoryArray, VendorsArray, ...rest } = req.body;
    const ProductCategory = [];
    if (ProductCategoryArray) {
      ProductCategoryArray.forEach((productCategoryId) => {
        ProductCategory.push({ productCategoryId });
      });
    }
    const Vendors = [];
    if (VendorsArray) {
      VendorsArray.forEach((vendorId) => {
        Vendors.push({ vendorId });
      });
    }

    const newProducts = new Products({
      ...rest,
      ProductCategory,
      Vendors,
    });

    const response = await newProducts.save();
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

export const getAllProducts = async (req, res) => {
  try {
    const response = await Products.find();
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

export const getProductsById = async (req, res) => {
  try {
    const response = await Products.findById(req.params.ProductId);
    if (!response) {
      res
        .status(404)
        .json({ code: 404, status: "Product not found", data: {} });
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

export const updateProductsById = async (req, res) => {
  try {
    const response = await Products.findByIdAndUpdate(
      req.params.ProductId,
      req.body,
      { new: true }
    );
    if (!response) {
      res
        .status(404)
        .json({ code: 404, status: "Product  not found", data: {} });
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

export const deleteProductsById = async (req, res) => {
  try {
    const response = await Products.findByIdAndDelete(req.params.ProductId);
    if (!response) {
      console.log(res);
      res
        .status(404)
        .json({ code: 404, status: "Product not found", data: {} });
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

export const filterProductByCategory = async (req, res) => {
  try {
    const categoryId = req.params.CategoryId;
    const response = await Products.find();

    const filteredProducts = response.filter((category) =>
      category.ProductCategory.some(
        (product) => product.productCategoryId == categoryId
      )
    );
    if (!filteredProducts || filteredProducts.length === 0) {
      return res.status(404).json({
        code: 404,
        status: "Selected Category Products not found",
        data: {},
      });
    }
 
    res.status(200).json({
      code: 200,
      status: "Success!",
      data:{ length: filteredProducts.length, results: filteredProducts },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      code: 500,
      status:
        "An error occurred! Check server logs for more info is the error.",
      data: {},
    });
  }
};
