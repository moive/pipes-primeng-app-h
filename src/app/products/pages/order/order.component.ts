import { Component } from '@angular/core';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent {
  isUpperCase: boolean = false;

  toggleUpperCase(): void {
    this.isUpperCase = !this.isUpperCase;
  }
}
