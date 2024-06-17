import { Component, Input, OnInit, Type } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-card',
  templateUrl: './gifs-card.component.html',
  styleUrl: './gifs-card.component.css',
})

// el OnInit se utiliza para revisar el componente cuando se inicia
export class GifsCardComponent implements OnInit {
  @Input()
  // se le agrega el !, para evitar el error de no inicializarla,
  // como es una propiedad requerida se chequea en el OnInit
  public gif!: Gif;

  // en la implementacion se chequea que el gif exista, esto es un
  // uso comun chequear la existencia de las propiedades requeridas
  ngOnInit(): void {
    if (!this.gif) throw new Error('Gif property is required');
  }
}
