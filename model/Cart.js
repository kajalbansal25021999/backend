import mongoose from "mongoose";

const CartSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  items: [
    {
      productId: {
        type: String,
        required: true,
      },
      title: String,
      price: Number,
      image: String,
      quantity: {
        type: Number,
        required: true,
        default: 1,
      },
    },
  ],
});

const CartModel = mongoose.model("Cart", CartSchema);

export default CartModel;
