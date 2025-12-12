import mongoose from "mongoose";

const StaffSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  gender: { type: String, required: true },
  dob: { type: String, required: true },
  address: { type: String, required: true },
  jobTitle: { type: String, required: true },
  department: { type: String },
  employeeId: { type: String },
  salary: { type: Number, required: true },
});

export default mongoose.model("Staff", StaffSchema);
