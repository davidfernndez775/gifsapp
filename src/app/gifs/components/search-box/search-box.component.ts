import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/GifsService';

@Component({
  selector: 'gifs-search-box',
  template: `<h5>Buscar:</h5>
    <input
      type="text"
      class="form-control"
      placeholder="Buscar gifs..."
      (keyup.enter)="searchTag()"
      #txtTagInput
    />`,
  styleUrl: './search-box.component.css',
})
export class SearchBoxComponent {
  @ViewChild('txtTagInput')
  // se le agrega ! al final para indicar que nunca va a ser nulo
  public tagInput!: ElementRef<HTMLInputElement>;

  // en el constructor se asocia el servicio
  constructor(private gifsService: GifsService) {}

  searchTag() {
    // se crea una variable para guardar el input del usuario
    const newTag = this.tagInput.nativeElement.value;
    // se le pasa el valor guardado a el metodo definido en el servicio
    this.gifsService.searchTag(newTag);
    // se limpia el valor del search box
    this.tagInput.nativeElement.value = '';
  }
}
