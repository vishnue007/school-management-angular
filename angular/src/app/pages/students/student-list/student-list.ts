import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { StudentService } from '../../../services/student.service';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ToastService } from '../../../services/toast.service';
import { ConfirmService } from '../../../services/confirm.service';

@Component({
  selector: 'app-student-list',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './student-list.html',
  styleUrl: './student-list.scss',
})
export class StudentList implements OnInit {
  isLoading = signal(true);
  students: any[] = [];
  errorMessage = '';
  showModal = signal(false);
  editForm!: FormGroup;
  currentEditId = '';

  constructor(private studentService: StudentService, private fb: FormBuilder, private toast: ToastService, private confirmService: ConfirmService) {
    this.editForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      class: [''],
      section: [''],
      phone: [''],
      fatherName: [''],
      motherName: [''],
      dob: [''],
      email: [''],
      address: [''],
      gender: ['']
    });
  }

  ngOnInit(): void {
    this.fetchStudents();
  }

  fetchStudents() {
    this.isLoading.set(true); // turn ON loading

    this.studentService.getStudents().subscribe({
      next: (data) => {
        this.students = data;
        this.isLoading.set(false); // turn OFF loading
      },
      error: () => {
        this.errorMessage = 'Failed to load students!';
        this.isLoading.set(false);
      }
    });
  }

 openEditModal(student: any) {
    this.currentEditId = student._id;
    this.editForm.patchValue(student);
    this.showModal.set(true);
  }

  closeModal() {
    this.showModal.set(false);
  }

  updateStudent() {
    this.studentService.updateStudent(this.currentEditId, this.editForm.value)
      .subscribe({
        next: () => {
          this.toast.show('Updated successfully!', 'success');
          this.closeModal();
          this.fetchStudents();
        },
        error: () => {
          this.toast.show('Updated failed!', 'error');
        }
      });
  }

  async deleteStudent(id: string) {
    const ok = await this.confirmService.ask("Are you sure you want to delete this student?");
    if (!ok) return;

    this.studentService.deleteStudent(id).subscribe({
      next: () => {
        this.toast.show('Student deleted successfully', 'success');
        this.fetchStudents(); // refresh list
      },
      error: () => {
        this.toast.show('Failed to delete student', 'error');
      }
    });
  }

}
