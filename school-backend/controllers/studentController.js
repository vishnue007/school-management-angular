import Student from "../models/Student.js";

// Get all students
export const getStudents = async (req, res) => {
  try {
    const { class: studentClass, section } = req.query;
    let query = {};

    if (studentClass) query.class = studentClass;
    if (section) query.section = section;

    const students = await Student.find(query);
    res.json(students);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export const addStudent = async (req, res) => {
  try {
    const student = await Student.create(req.body);

    res.json({ message: "Student added successfully", student });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getStudentById = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    res.json(student);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateStudent = async (req, res) => {
  try {
    const updated = await Student.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json({ message: "Student updated successfully", updated });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export const deleteStudent = async (req, res) => {
  try {
    await Student.findByIdAndDelete(req.params.id);
    res.json({ message: "Student deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



