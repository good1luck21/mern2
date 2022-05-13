import mongoose from "mongoose";

const botSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Bot", botSchema);
