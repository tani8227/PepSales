import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    productName: {
      type: String,
      required: true,
    },
     price: {
      type: Number,
      required: true,
    },
    quantity:
    {
        type:Number,
        required:true,
    },
    customer_ref:
    {
       type:mongoose.Schema.Types.ObjectId,
       required:true,
    }
  },
  {
    timestamps: true, 
  }
);

const Product = mongoose.model("Product", productSchema);
export default Product;
