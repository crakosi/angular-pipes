import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  //i18nSelect
  nombre: string = 'Ives Mejia';
  genero: string = 'masculino';

  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  //i18nPlural
  clientes: string[] = ['Juan','Pedro','Kiko'];

  clientesMapa= {
    '=0':'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando',
    'other': 'tenemos # clientes esperando '
  }

  cambiarPersona():void {
    this.nombre = 'Juana la Iguana'
    this.genero = 'femenino'
  }

  eliminarPersona():void {
    console.log(this.clientes);
    this.clientes.pop();
    console.log(this.clientes);

  }

  // key Value Pipe

  persona = {
    nombre: 'Ives',
    edad: 35,
    direccion: 'CDMX, México'
  }

  //Asyn Pipe
  miObservable = interval(1000);

  valorPromesa = new Promise((resolve, reject)=>{
    setTimeout(() => {
      resolve('Tenemos data de proimesa');
    }, 3500);
  });
}
