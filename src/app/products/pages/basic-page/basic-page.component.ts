import { Component } from '@angular/core';

@Component({
  selector: 'app-basic-page',
  templateUrl: './basic-page.component.html',
  styleUrls: ['./basic-page.component.scss'],
})
export class BasicPageComponent {
  nameLower: string = 'moises velasquez';
  nameUpper: string = 'MOISES VELASQUEZ';
  fullName: string = 'mOisEs veLasQueZ';
  customDate: Date = new Date();
}
