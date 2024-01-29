import mongoose from "mongoose";
const productsSchema = new mongoose.Schema(
  {
    ProductCategory: [
      {
        productCategoryId: {
          type: mongoose.Types.ObjectId,
          // unique: true,
          required: [true, "Product Name required!"],
          trim: true,
        },
      },
    ],
    Vendors: [
      {
        vendorId: {
          type: mongoose.Types.ObjectId,
          // unique: true,
          required: [true, "Product Name required!"],
          trim: true,
        },
      },
    ],
    ProductName: {
      type: String,
      unique: true,
      required: [true, "Product Name required!"],
      trim: true,
    },
    PurchasePrice: {
      type: String,
      required: [true, "Purchase Price required!"],
      trim: true,
    },
    SellingPrice: {
      type: Number,
      required: [true, "Selling Price required!"],
      trim: true,
    },
    DisplayPrice: {
      type: Number,
      required: [true, "Display Price required!"],
      trim: true,
    },
    ProductUnit: {
      type: Number,
      required: [true, "Product Unit required!"],
      trim: true,
    },
    Description: {
      type: String,
      required: [true, "Description required!"],
      trim: true,
    },
    ProductImage: {
      type: String,
      required: [true, "Product Image required!"],
      trim: true,
    },
    Quantity: {
      type: Number,
      required: [true, "Quantinty required!"],
      trim: true,
    },
    SKUId: {
      type: Number,
      require: [true, "SKU id required!"],
      trim: true,
    },
    Variants: [
      {
        Type: {
          type: String,
          require: [true, "Type required!"],
          trim: true,
        },
        Value: {
          type: Number,
          require: [true, "Value required!"],
          trim: true,
        },
        SellingPrice: {
          type: Number,
          require: [true, "Selling Price required!"],
          trim: true,
        },
        DisplayPrice: {
          type: Number,
          require: [true, "Display Price required!"],
          trim: true,
        },
        SKUId: {
          type: Number,
          require: [true, "SKU Id required!"],
          trim: true,
        },
        Quantity: {
          type: Number,
          require: [true, "Quantity required!"],
          trim: true,
        },
        Image: {
          type: String,
          require: [false, "Image required!"],
          trim: true,
        },
      },
    ],
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

const Products = mongoose.model("colProducts", productsSchema);

export default Products;
