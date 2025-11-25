import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-register',
  imports: [ 
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule],
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class Register {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.minLength(10)]],
      grade: ['', Validators.required],
      parentName: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      console.log('Student Registered:', this.registerForm.value);
      alert('Registration Successful!');
      this.registerForm.reset();
    }
  }
}
