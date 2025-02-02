import mongoose, { Schema } from "mongoose";

const propertySchema = new Schema(
  {
    // title: {
    //   type: String,
    //   required: true,
    //   trim: true,
    // },
    // location: {
    //   type: String,
    //   required: true,
    //   trim: true,
    // },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: true,
      enum: ["Residential", "Commercial", "Industrial", "Land"],
    },
    bankName: {
      type: String,
      required: true,
      trim: true,
    },
    address: {
      type: Object,
      default: {
        area: "",
        city: "",
        district: "",
        state: "",
        Pincode: "",
      },
    },
    image: [
      {
        url: String,
        fileType: String,
      },
    ],
    description: {
      type: String,
      default: "",
      trim: true,
    },
    auctionDate: {
      type: Date,
      required: true,
    },
    auctionTime: {
      type: String, // HH:mm:ss
      required: true,
    },
    // contactNo: {
    //   type: String,
    //   required: true,
    //   match: [/^\+91\d{10}$/, "Invalid contact number"],
    //   trim: true,
    // },
    areaPerSqFt: {
      type: Number,
      required: true,
    },
    nearbyPlaces: {
      type: [String],
      default: [],
    },
    mapLocation: {
      latitude: {
        type: String,
        required: true,
        trim: true,
      },
      longitude: {
        type: String,
        required: true,
        trim: true,
      },
    },
    enquiryUrl: {
      type: String,
      required: true,
      trim: true,
    },
    // addedby: userid //////////////////////////////////////////////////////////////////////////
  },
  { timestamps: true }
);

const propertyModel =
  mongoose.models.Properties || mongoose.model("Properties", propertySchema);

export default propertyModel;
