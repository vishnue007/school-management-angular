import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:5000/api/students';

export interface StudentRequest {
  firstName: string;
  lastName: string;
  email: string;
  dob: string;
  class: string;
  section: string;
  gender: string;
  phone: string;
  address: string;
  fatherName: string;
  motherName: string;
}

export interface AuthResponse {
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  constructor(private http: HttpClient) {}

addStudent(userData: StudentRequest): Observable<AuthResponse> {
  return this.http.post<AuthResponse>(API_URL, userData);
}


}

