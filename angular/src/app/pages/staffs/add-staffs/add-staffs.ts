import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { StaffsRequest, StaffService } from '../../../services/staffs.service';
import { Router } from '@angular/router';
import { Button } from '../../../components/button/button';

@Component({
  selector: 'app-add-staff',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,Button],
  templateUrl: './add-staffs.html',
  styleUrls: ['./add-staffs.scss'],
})
export class AddStaffs {
  isLoading = false;
  errorMessage = '';
  successMessage = '';
  staffForm: FormGroup;

  jobTitles = [
    'Teacher', 'Principal', 'Vice Principal', 'Clerk',
    'Office Staff', 'Librarian', 'Sports Trainer'
  ];

  departments = [
    'English', 'Maths', 'Science', 'Social Science',
    'Computer Science', 'Sports', 'Admin', 'Office'
  ];

  constructor(
    private fb: FormBuilder,
    private staffService: StaffService,
    private router: Router
  ) {
    this.staffForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      gender: ['', Validators.required],
      dob: ['', Validators.required],
      address: ['', Validators.required],
      jobTitle: ['', Validators.required],
      department: [''],
      employeeId: [''],
      salary: ['', Validators.required],
    });
  }

  submit() {
    if (this.staffForm.valid) {
      this.isLoading = true;
      this.errorMessage = '';
      this.successMessage = '';

      const staffsData: StaffsRequest = this.staffForm.value;

      this.staffService.addStaff(staffsData).subscribe({
        next: (response) => {
          this.isLoading = false;
          this.successMessage = response.message || 'Staff added successfully!';

          setTimeout(() => {
            this.router.navigate(['/staffs/list']);
          }, 1500);
        },
        error: (error) => {
          this.isLoading = false;
          this.errorMessage = error.error?.message || 'Failed to add staff.';
        },
      });

    } else {
      this.staffForm.markAllAsTouched();  // show validation errors
    }
  }
}
