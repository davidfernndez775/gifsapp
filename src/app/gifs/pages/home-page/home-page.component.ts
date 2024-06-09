import { Component } from '@angular/core';
import GifsService from '../../services/gifs.service';
import { Gif } from './../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent {
  // inyectamos el servicio con los datos que vamos a utilizar
  constructor(private gifsService: GifsService) {}
  // hacemos un getter para obtener la lista de Gifs
  get gifs(): Gif[] {
    return this.gifsService.gifList;
  }
}
