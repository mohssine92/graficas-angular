import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Color, Label, MultiDataSet } from 'ng2-charts';
import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [
  ]
})
export class DonaHttpComponent implements OnInit {

  public doughnutChartLabels: Label[] = [
    // 'Download Sales', 'In-Store Sales', 'Mail-Order Sales', 'Other'
  ];
  public doughnutChartData: MultiDataSet = [
    // [350, 450, 100, 150]
  ];
  public doughnutChartType: ChartType = 'doughnut';

  public colors: Color[] = [
    {
      backgroundColor: [
        '#0075ED',
        '#00BAF7',
        '#00E0DB',
        '#00F7AD',
        '#00ED63',
      ]
    }
  ]


  constructor(private graficasService: GraficasService ) { }

  ngOnInit(): void {
    /* ng onit es buen logar para dispara peticiones http */

   // /* esta es una forma de tarabajar esta bien opcion 1  */
   // this.graficasService.getUsuariosRedesSociales()
   //   .subscribe((data) => { // supenemos la obtencion de nuemro de usaurios de redes sociales estos numeros realmente seran millones o billones de users
   //     // debo extaer las llaves y los valores para poder asignar data a las porps de la garfica
   //       console.log(data);

   //     // Objeto de js y su metodo su   t0dos objetos , me saca coleccion de los keys de facil es :
   //     const labels = Object.keys( data ); // es lo necesito ponr en ..
   //     const values = Object.values(data);

   //     this.doughnutChartLabels = labels;
   //     this.doughnutChartData.push( values );

   //   })


    /* otra forma de trabajar cuando hacemos la peticion nos trae la informacion como la necesitamos en dos arreglos , trabajar cob Rxjs  pipes etc ..  opcion 2 */
    this.graficasService.getUsuariosRedesSocialesDonaData()
       .subscribe( ({ labels, values }) => { // desestructurar arg

         this.doughnutChartLabels = labels;
         this.doughnutChartData.push( values );

       })





  }

}
