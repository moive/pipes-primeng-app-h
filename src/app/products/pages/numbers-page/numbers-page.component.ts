import { Component } from '@angular/core';

@Component({
  selector: 'app-numbers-page',
  templateUrl: './numbers-page.component.html',
  styleUrls: ['./numbers-page.component.scss'],
})
export class NumbersPageComponent {
  totalSells: number = 2567789.5567;
  percent: number = 0.4856;
}
