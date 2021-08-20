import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, delay } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class GraficasService {

  constructor( private http: HttpClient ) { }

  getUsuariosRedesSociales() {
    return this.http.get('http://localhost:3000/grafica');
  }

  getUsuariosRedesSocialesDonaData() {
    return this.getUsuariosRedesSociales()
        .pipe( // sabemos que es observable asi podemos anxar un pipe para ajustar la salida tal como queremos lada que fluye por aqui para el suscriptor puedo concatear - mutar
          delay(1000), // retardado
          map( data => {
            const labels = Object.keys( data );
            const values = Object.values( data );
            return { labels, values }; // regresa la informacion como me da la gana
          }) // map permite tomar respuesta de un observable y returnar cualquier cosa quieran como observable
        )  // tal vez esta parte que un poco mas tecnica

  }





}
/*
  ng g s graficas/services/graficas --skip-tests
  336
*/
