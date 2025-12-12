import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { StaffService } from '../../../services/staffs.service';
import { ToastService } from '../../../services/toast.service';
import { ConfirmService } from '../../../services/confirm.service';
import { Router } from '@angular/router';
import { Button } from '../../../components/button/button';

@Component({
  selector: 'app-staff-list',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, Button],
  templateUrl: './staffs-list.html',
  styleUrl: './staffs-list.scss',
})
export class StaffsList implements OnInit {

  isLoading = signal(true);
  staffs: any[] = [];
  errorMessage = '';

  page = 1;
  limit = 2;        // show 10 per page
  totalPages = 1;

  showModal = signal(false);
  editForm!: FormGroup;
  currentEditId = '';

   jobTitles = [
    'Teacher', 'Principal', 'Vice Principal', 'Clerk',
    'Office Staff', 'Librarian', 'Sports Trainer'
  ];

  departments = [
    'English', 'Maths', 'Science', 'Social Science',
    'Computer Science', 'Sports', 'Admin', 'Office'
  ];

  constructor(
    private staffService: StaffService,
    private fb: FormBuilder,
    private toast: ToastService,
    private confirmService: ConfirmService,
    public router: Router
  ) {
    this.editForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      gender: ['', Validators.required],
      dob: [''],
      address: [''],
      jobTitle: ['', Validators.required],
      department: [''],
      employeeId: [''],
      salary: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.loadStaffs();
  }

  get paginatedStaffs() {
    const start = (this.page - 1) * this.limit;
    return this.staffs.slice(start, start + this.limit);
  }

  nextPage() {
    if (this.page < this.totalPages) {
      this.page++;
    }
  }

  prevPage() {
    if (this.page > 1) {
      this.page--;
    }
  }

  goToPage(num: number) {
    this.page = num;
  }

  loadStaffs() {
    this.isLoading.set(true);
    this.errorMessage = '';

    this.staffService.getStaffs().subscribe({
      next: (res: any) => {
        this.staffs = Array.isArray(res) ? res : [res];
        this.totalPages = Math.ceil(this.staffs.length / this.limit);
        this.page = 1; // reset on reload
        this.isLoading.set(false);
      },
      error: () => {
        this.errorMessage = 'Failed to load staff list.';
        this.isLoading.set(false);
      }
    });
  }

  openEditModal(staff: any) {
    this.currentEditId = staff._id;
    this.editForm.patchValue(staff);
    this.showModal.set(true);
  }

  closeModal() {
    this.showModal.set(false);
  }

  updateStaff() {
    this.staffService.updateStaff(this.currentEditId, this.editForm.value)
      .subscribe({
        next: () => {
          this.toast.show('Staff updated successfully!', 'success');
          this.closeModal();
          this.loadStaffs();
        },
        error: () => {
          this.toast.show('Update failed!', 'error');
        }
      });
  }

  async deleteStaff(id: string) {
    const ok = await this.confirmService.ask("Are you sure you want to delete this staff?");
    if (!ok) return;

    this.staffService.deleteStaff(id).subscribe({
      next: () => {
        this.toast.show('Staff deleted successfully', 'success');
        this.loadStaffs();
      },
      error: () => {
        this.toast.show('Failed to delete staff', 'error');
      }
    });
  }
}
