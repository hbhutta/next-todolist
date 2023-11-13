import mongoose, { Schema } from "mongoose";

const personSchema = new Schema(
  {
    name: String,
  }
);

const Person = mongoose.models.Person || mongoose.model("Person", personSchema);
export default Person;
