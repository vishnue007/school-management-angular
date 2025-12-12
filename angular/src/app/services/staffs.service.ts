import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:5000/api/staff';

export interface StaffsRequest {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  gender: string;
  dob: string;
  jobTitle: string;
  department: string;
  employeeId: string;
  salary: string;
  address: string;
}

export interface AuthResponse {
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class StaffService {
 constructor(private http: HttpClient) {}

  getStaffs(): Observable<any[]> {
    return this.http.get<any[]>(API_URL);
  }

  addStaff(data: StaffsRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(API_URL, data);
  }

  getStaffById(id: string): Observable<any> {
    return this.http.get<any>(`${API_URL}/${id}`);
  }

  updateStaff(id: string, data: StaffsRequest): Observable<any> {
    return this.http.put<any>(`${API_URL}/${id}`, data);
  }

  deleteStaff(id: string): Observable<any> {
    return this.http.delete<any>(`${API_URL}/${id}`);
  }
}