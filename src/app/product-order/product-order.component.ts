import { ShoppingService } from './../shopping.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-order',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './product-order.component.html',
  styleUrl: './product-order.component.css',
})
export class ProductOrderComponent implements OnInit {
  signupForm: FormGroup;
  paymentMethod: string[] = ['Credit Cart', 'PayPal', 'Payment od Delivery'];

  constructor(public fb: FormBuilder, private shoppingService: ShoppingService, private router: Router) {}

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      phone: new FormControl(null, Validators.required),
      address: new FormControl(null, Validators.required),
      comment: new FormControl(),
      paymentMethod: new FormControl(null, Validators.required),
    });
  }
  onSubmit() {
    if(this.signupForm.valid) {
      this.shoppingService.clearCart();
      this.router.navigate([''])
    }
  }
}
