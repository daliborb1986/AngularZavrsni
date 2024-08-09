import { ShopComponent } from './../shop/shop.component';
import { AuthServiceService } from './../auth-service.service';
import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink,Router } from '@angular/router';

declare var  bootstrap: any;

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  @ViewChild('myForm') signupForm: NgForm;

  constructor(private authService: AuthServiceService, private router: Router) {}

  ngAfterViewInit(): void {
    // Initialize the modal after the view is initialized
    const modalElement = document.getElementById('registrationModal');
    if (modalElement) {
      this.registrationModal = new bootstrap.Modal(modalElement);
    }
  }

  registrationModal: any;

  onSubmit(form: NgForm): void {
    if (form.valid) {
      this.authService.register(form.value).subscribe(() => {
        // const modal = new bootstrap.Modal(
        //   document.getElementById('registrationModal')!
        // );
        // modal.show();
        if(this.registrationModal){
          this.registrationModal.show()
        }
        this.authService.setAuthenticationStatus(true);
        this.signupForm.reset();
        this.router.navigate([''])
      });
    }
  }
}
