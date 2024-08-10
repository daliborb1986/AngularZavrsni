import { AuthServiceService } from '../services/auth-service.service';
import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  @ViewChild('myForm') signupForm: NgForm;

  constructor(
    private authService: AuthServiceService,
    private router: Router
  ) {}

  onSubmit(form: NgForm): void {
    if (form.valid) {
      this.authService
        .login(form.value.email, form.value.password)
        .subscribe((users) => {
          if (users.length > 0) {
            this.authService.setAuthenticationStatus(true);
            this.router.navigate(['/shop']);
          } else {
            alert('Invalid email or password');
          }
        });
    }
  }
}
