import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  dob: String,
  class: String,
  section: String,
  gender: String,
  phone: String,
  address: String,
  fatherName: String,
  motherName: String
});

export default mongoose.model("Student", studentSchema);
