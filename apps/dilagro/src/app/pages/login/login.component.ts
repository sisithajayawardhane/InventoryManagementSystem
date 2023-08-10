import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'org-login',
  standalone: true,
  imports: [CommonModule, MatInputModule, ReactiveFormsModule, MatButtonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  emailCtrl = new FormControl(null, [Validators.required, Validators.email])
  loginFormGroup = new FormGroup({
    email: this.emailCtrl,
    password: new FormControl(null, [Validators.required, Validators.minLength(3)]),

  });
  constructor(private router: Router) { }

  onLogin() {
    console.log(this.loginFormGroup.value);
    this.router.navigate(['admin']);
  }
}
