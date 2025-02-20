import mongoose, { mongo } from "mongoose";

const subTodoSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      requied: true,
    },
    complete: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

export const subTodo = mongoose.model("subTodo", subTodoSchema);
