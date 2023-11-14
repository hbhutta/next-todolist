import mongoose, { Schema } from "mongoose";
// import Status from '@/types/Status';

const taskSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  task_status: String // One of "todo", "in-progress", "completed"
});

const Task = mongoose.models.Task || mongoose.model("Task", taskSchema);
export default Task;
