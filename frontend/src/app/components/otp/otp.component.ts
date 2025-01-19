import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.scss'],
})
export class OtpComponent {
  otpForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.otpForm = this.fb.group({
      otp: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(6)]],
    });
  }

  onSubmit() {
    if (this.otpForm.valid) {
      const otp = this.otpForm.value.otp;
      const email = localStorage.getItem('email'); // Retrieve email for OTP validation

      if (email) {
        this.authService.validateOtp(email, otp).subscribe(
          (response) => {
            alert(response.message);
            this.router.navigate(['/home']); // Navigate to dashboard on success
          },
          (error) => {
            alert(error.error.message);
          }
        );
      } else {
        alert('Email not found! Please login again.');
        this.router.navigate(['/login-user']);
      }
    }
  }
}
