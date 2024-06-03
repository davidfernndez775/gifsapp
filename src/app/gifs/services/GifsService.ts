import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

// se usa un Injectable asociado a root para que este disponible el
// servicio para todos los componentes, esto viene por defecto en
// Angular.
@Injectable({
  providedIn: 'root',
})
export class GifsService {
  // definimos las variables, en el caso de tagsHistory se designa como
  // privado para evitar que alguien lo pueda modificar fuera de este
  // servicio
  private _tagsHistory: string[] = [];
  private apiKey: string = 'dqOlAPxthQVhRPB4WIpA5O79UUmE27ml';
  private serviceUrl: string = 'https://api.giphy.com/v1/gifs';

  constructor(private http: HttpClient) {}

  // CODIGO PARA DEVOLVER INFORMACION AL SIDEBAR
  // el get se utiliza para acceder a los datos almacenados en _tagsHistory
  // devolviendo una copia del mismo al sidebar component, para proteger
  // los datos almacenados en la propiedad privada
  get tagsHistory() {
    return [...this._tagsHistory];
  }

  // CODIGO PARA RECIBIR INFORMACION DESDE EL SEARCH BOX
  searchTag(tag: string): void {
    // chequeamos que el valor de busqueda no sea nulo, si lo es salimos
    // de la funcion
    if (tag.length === 0) return;
    // si el valor no es nulo llamamos la funcion organizeHistory que contiene
    // la logica para ordenar la nueva busqueda dentro del array
    this.organizeHistory(tag);
    // obtenemos la informacion usando el metodo interno http que es un
    // objeto HttpClient definido en el constructor. Creamos un observable
    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', '10')
      .set('q', tag);
    // se agregan unos console log de control
    console.log('Making HTTP request with params:', params.toString());
    //prettier-ignore
    this.http.get(`${this.serviceUrl}/search`, { params }).subscribe({
      next: (resp) => {
        console.log('HTTP response received:', resp);
      },
      error: (err) => {
        console.error('HTTP request error:', err);
      },
      complete: () => {
        console.log('HTTP request complete');
      },
    });
  }

  private organizeHistory(tag: string) {
    // pasamos la busqueda a minusculas porque Javascript es case sensitive
    tag = tag.toLowerCase();
    // si el nuevo valor esta ya esta en la lista
    if (this._tagsHistory.includes(tag)) {
      // con filter devuelve un array con solo los elementos que cumplan la condicion
      // o sea borra el tag si coincide con la busqueda, para evitar duplicados
      this._tagsHistory = this._tagsHistory.filter((oldTag) => oldTag !== tag);
    }
    // coloca la busqueda al principio del array
    this._tagsHistory.unshift(tag);
    // limita la cantidad de tags a 10
    this._tagsHistory = this._tagsHistory.splice(0, 10);
  }
}
