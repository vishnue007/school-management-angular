import Staff from "../models/Staff.js";

// Get all staffs
export const getStaffs = async (req, res) => {
  try {
    const staffs = await Staff.find();
    res.json(staffs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add new staff
export const addStaff = async (req, res) => {
  try {
    const staff = await Staff.create(req.body);
    res.json({ message: "Staff added successfully", staff });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get staff by ID
export const getStaffById = async (req, res) => {
  try {
    const staff = await Staff.findById(req.params.id);
    res.json(staff);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update staff
export const updateStaff = async (req, res) => {
  try {
    const updated = await Staff.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json({ message: "Staff updated successfully", updated });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete staff
export const deleteStaff = async (req, res) => {
  try {
    await Staff.findByIdAndDelete(req.params.id);
    res.json({ message: "Staff deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
