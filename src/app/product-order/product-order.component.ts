import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-order',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './product-order.component.html',
  styleUrl: './product-order.component.css'
})
export class ProductOrderComponent implements OnInit {

  signupForm: FormGroup;

  ngOnInit(): void {
  }
}
