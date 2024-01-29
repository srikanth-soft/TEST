import Vendor from "../models/Vendor.model.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
// import { v4 as uuidv4 } from 'uuid';
// import mongoose from 'mongoose';
export const createVendor = async (req, res) => {
  try {
    const { ...rest } = req.body;
    const newVendor = new Vendor({
      ...rest,
    });

    const response = await newVendor.save();
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

export const getAllVendor = async (req, res) => {
  try {
    const response = await Vendor.find();
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

export const deleteVendor = async (req, res) => {
  try {
    const response = await Vendor.findByIdAndDelete(req.params.VendorId);
    if (!response) {
      console.log(res);
      res.status(404).json({ code: 404, status: "Vendor not found", data: {} });
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

export const updateVendorById = async (req, res) => {
  try {
    const response = await Vendor.findByIdAndUpdate(
      req.params.VendorId,
      req.body,
      { new: true }
    );
    if (!response) {
      res.status(404).json({ code: 404, status: "Vendor not found", data: {} });
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

export const getVendorById = async (req, res) => {
  try {
    const response = await Vendor.findById(req.params.VendorId);
    if (!response) {
      res
        .status(404)
        .json({ code: 404, status: "Vendor Type not found", data: {} });
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
