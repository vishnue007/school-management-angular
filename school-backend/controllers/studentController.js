import Student from "../models/Student.js";

// Get all students
export const getStudents = async (req, res) => {
  try {
    const { class: studentClass, section } = req.query;
    let query = { role: "student" };

    if (studentClass) query.class = studentClass;
    if (section) query.section = section;

    const students = await User.find(query).select("-password");
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

