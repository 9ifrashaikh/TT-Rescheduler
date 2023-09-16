import mongoose, { Schema } from "mongoose";
import timeTables from "./TimeTable.js";
import { LectureSchema, timeTableSchema } from "./schema.js";


const facultySchema = new mongoose.Schema({
  UID: String,
  name: String,
  email: String,
  password: String,
  tt: { type: Schema.Types.ObjectId, ref: 'TimeTables' }
});

const Professors = mongoose.model("Professors", facultySchema);
//JSYK
// A model in Mongoose is a constructor function that is used
//to create documents based on a schema.
//It represents a specific collection in your MongoDB database.
export default Professors;
