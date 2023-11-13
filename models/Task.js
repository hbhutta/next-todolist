import mongoose, { Schema } from "mongoose";
// import Status from '@/types/Status';

const taskSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
});

const Task = mongoose.models.Task || mongoose.model("Task", taskSchema);
export default Task;
