import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.scss'],
})
export class UncommonPageComponent {
  // i18n Select
  name: string = 'Moises';
  gender: 'male' | 'female' = 'male';
  invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  };

  // i18nPlural
  clients: string[] = ['Nancy', 'Pedro', 'Dante', 'Eduardo', 'Marcos', 'Cesar'];
  clientMap = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos 2 personas esperando.',
    other: 'tenemos # clientes esperando.',
  };

  changeClient(): void {
    this.name = 'Daniela';
    this.gender = 'female';
  }

  deleteClient() {
    this.clients.shift();
  }

  // KeyValue Pipe
  person = {
    name: 'Moises',
    age: 41,
    address: 'Callao Perú',
  };

  // async
  myObservableTimer: Observable<number> = interval(2000).pipe(
    tap((value) => console.log('tap: ', value))
  );

  promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data en la promesa');
      console.log('Tenemos data en la promesa');
    }, 3500);
  });
}
