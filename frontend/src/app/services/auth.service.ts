
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private BASE_URL = 'http://localhost:8080/api'; // Backend API base URL

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.BASE_URL}/user/validateUser`, { email, password });
  }

  generateOtp(email: string): Observable<any> {
    return this.http.post(`${this.BASE_URL}/otp/generateOtp`, { email });
  }

  validateOtp(email: string, otp: string): Observable<any> {
    return this.http.post(`${this.BASE_URL}/otp/validate-otp`, { email, otp });
  }

  createUser(name: string, email: string, password: string): Observable<any> {
    return this.http.post(`${this.BASE_URL}/user/generate-otp`, {
      name,
      email,
      password,
    });
  }
}
