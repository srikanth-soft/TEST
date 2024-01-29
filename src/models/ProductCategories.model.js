import mongoose from "mongoose";
const productCategoriesSchema = new mongoose.Schema(
  {
    PrdCategoryName: {
      type: String,
      unique: true,
      required: [true, "Product Category required!"],
      trim: true,
    },
    Description: {
      type: String,
      required: [true, "Description required!"],
      trim: true,
    },
    Image: {
      type: String,
      required: [true, "Image required!"],
      trim: true,
    },
    BannerImage: {
      type: String,
      require: [true, "Banner Image required!"],
      trim: true,
    },
    status: {
      type: Boolean,
      required: [true, "status flag required!"],
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const ProductCategories = mongoose.model(
  "colProductCategories",
  productCategoriesSchema
);

export default ProductCategories;
