import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Color, Heroe } from '../../interfaces/ventas.interface';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent {

  enMayusculas: boolean = true;
  ordenarPor: string = 'sin valor';
  heroes: Heroe[] = [
    {
      nombre: 'Superman',
      vuela: true,
      color: Color.azul
    },
    {
      nombre: 'Batman',
      vuela: false,
      color: Color.negro
    },
    {
      nombre: 'Linterna Verde',
      vuela: true,
      color: Color.verde
    },
    {
      nombre: 'Flash',
      vuela: false,
      color: Color.rojo
    }
  ]
  cambiarMayusculas(): void {
    this.enMayusculas = !this.enMayusculas;
  }

  cambiarOrden(valor: string ){
    this.ordenarPor = valor;

  }


}
