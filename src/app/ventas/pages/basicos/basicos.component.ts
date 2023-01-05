import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower: string = 'ives';
  nombreUpper: string = 'IVES';
  nombreCompleto: string = 'iVes mEjiA';

  fecha: Date = new Date();

}
