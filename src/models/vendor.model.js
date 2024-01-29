import mongoose from "mongoose";
const vendorSchema = new mongoose.Schema(
  {
    // _id: {
    //   type: String,
    //   required: true,
    //   unique: true,
    // },
    // customId: {
    //   type: String,
    //   required: true,
    //   unique: true,
    // },
    Name: {
      type: String,
      required: [true, "Name required!"],
      trim: true,
    },
    ContactNumber: {
      type: Number,
      required: [true, "Contact Number required!"],
      trim: true,
    },
    Address: {
      type: String,
      required: [true, "Address required!"],
      trim: true,
    },
    BusinessType: {
      type: String,
      require: [true, "Business Type required!"],
      trim: true,
    },
    GstNumber: {
      type: String,
      require: [true, "GST Number required!"],
      trim: true,
    },
    Email: {
      type: String,
      unique: true,
      lowercase: true,
      trim: true,
      required: [true, "Email required!"],
      validate: {
        validator: function (v) {
          return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
        },
        message: (props) => `${props.value} is not a valid email!`,
      },
    },
    Website: {
      type: String,
      require: [true, "Website required!"],
      trim: true,
    },
    BankName: {
      type: String,
      require: [true, "Bank Name required!"],
      trim: true,
    },
    AcNumber: {
      type: Number,
      require: [true, "Account Number required!"],
      trim: true,
    },
    IfscCode: {
      type: String,
      require: [true, "IFSC Code required!"],
      trim: true,
    },
    PanNumber: {
      type: String,
      require: [true, "Pan NUMBER required!"],
      trim: true,
    },
    AadharNumber: {
      type: Number,
      require: [true, "Aadhar Number required!"],
      trim: true,
    },
    Notes: {
      type: String,
      // require: [true, "Notes required!"],
      trim: true,
    },
    GstFile: {
      type: String,
      // require: [true, "Gst Files required!"],
      trim: true,
    },
    BusinessLicense: {
      type: String,
      // require: [true, "Business License required!"],
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

const Vendor = mongoose.model("colVendor", vendorSchema);

export default Vendor;
