import mongoose from "mongoose";

const productTypeSchema = new mongoose.Schema(
  {
    productTypeName: {
      type: String,
      unique: true,
      required: [true, "Product Type Name required!"],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "Description required!"],
      trim: true,
    },
    image: {
      type: String,
      required: [true, "Image required!"],
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

const ProductType = mongoose.model("colProductType", productTypeSchema);

export default ProductType;
