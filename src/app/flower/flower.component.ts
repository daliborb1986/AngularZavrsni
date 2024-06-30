import { Component, Input } from '@angular/core';
import { Flower } from '../flowers';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-flower',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './flower.component.html',
  styleUrl: './flower.component.css',
})
export class FlowerComponent {
  @Input() flower!: Flower;
}
