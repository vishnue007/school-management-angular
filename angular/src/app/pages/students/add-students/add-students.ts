import { Component } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { StudentRequest, StudentService } from '../../../services/student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-students',
  imports: [ReactiveFormsModule],
  templateUrl: './add-students.html',
  styleUrl: './add-students.scss',
})
export class AddStudents {

  studentForm: FormGroup;
  isLoading = false;
  errorMessage = '';
  successMessage = '';
  constructor(private fb: FormBuilder, private studentService: StudentService, private router: Router) {
    this.studentForm = this.fb.group({
    firstname: ['', Validators.required],
    lastname: ['', Validators.required],
    email: ['', Validators.required],
    gender: ['', Validators.required],
    dob: ['', Validators.required],
    class: ['', Validators.required],
    section: ['', Validators.required],
    fathername: ['', Validators.required],
    mothername: ['', Validators.required],
    phone: ['', Validators.required],
    address: ['', Validators.required],
  });
  }

  submit() {
     if (this.studentForm.valid) {
      this.isLoading = true;
      this.errorMessage = '';
      this.successMessage = '';

      const studentData: StudentRequest = {
        firstName: this.studentForm.value.firstname,
        lastName: this.studentForm.value.lastname,
        email: this.studentForm.value.email,
        dob: this.studentForm.value.dob,
        class: this.studentForm.value.class,
        section: this.studentForm.value.section,
        gender: this.studentForm.value.gender,
        phone: this.studentForm.value.phone,
        address: this.studentForm.value.address,
        fatherName: this.studentForm.value.fathername,
        motherName: this.studentForm.value.mothername
      };

      this.studentService.addStudent(studentData).subscribe({
        next: (response) => {
          this.isLoading = false;
          this.successMessage = response.message || 'Registration successful!';
          
          setTimeout(() => {
            this.router.navigate(['/students/add']);
          }, 2000);
        },
        error: (error) => {
          this.isLoading = false;
          this.errorMessage = error.error?.message || 'Registration failed. Please try again.';
        }
      });
    } else {
      this.studentForm.markAllAsTouched();
    }
  }
  }

