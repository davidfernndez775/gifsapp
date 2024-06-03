import { GifsService } from '../../../gifs/services/GifsService';
import { Component } from '@angular/core';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  constructor(private gifsService: GifsService) {}

  // usamos un getter para obtener los valores desde el servicio
  // y guardarlos en la variable tags
  get tags() {
    return this.gifsService.tagsHistory;
  }
}
