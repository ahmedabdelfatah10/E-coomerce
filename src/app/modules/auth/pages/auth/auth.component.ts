import { Component } from '@angular/core';
import { FormGroup, FormControl, Validator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent  {
  loginForm = new FormGroup({
    userName: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(private router: Router,private auth:AuthService) {}
  showErorrMessage = false;
  submitForm() {
    this.loginForm.markAllAsTouched();
    if (this.loginForm.invalid) {
      return;
    }
    if (
      this.loginForm.value.userName == 'user' &&
      this.loginForm.value.password == 'user'
    ) {
      this.router.navigateByUrl('/home');
      localStorage.setItem('role', 'user');
      this.auth.isloggedIn$.next(true);
      return;
    }

    if (
      this.loginForm.value.userName == 'admin' &&
      this.loginForm.value.password == 'admin'
    ) {
      this.router.navigateByUrl('/dashboard');
      localStorage.setItem('role', 'admin');
      this.auth.isloggedIn$.next(true);
      return;
    }

    this.showErorrMessage = true;
  }
}
