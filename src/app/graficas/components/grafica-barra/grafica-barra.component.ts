
import { Component, Input, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';






/* la idea tener grafica en un componente perzonalizado que podemos reutulizar
 * pasamos por props la perzonalizacion dinamica
 * solo debe instanciar este componente y mandarle informacion del componente padre usando concepto input para alimetar las propiedad de este componente
*/
@Component({
  selector: 'app-grafica-barra',
  templateUrl: './grafica-barra.component.html',
  styles: [
  ]
})
export class GraficaBarraComponent implements OnInit {

  // usualmente los inputs se aconseja ponerlos al principio de la classe

  /* necesito recibir prop del padre , le doy valor por defect por si acaso no la recibo cuando se instancia este componente  */
  @Input() horizontal: boolean = false;



  public barChartOptions: ChartOptions = { // esto no damos acceso a nadie siempre sera responsive
    responsive: true, // adapte al contenodor que tiene
  };

  // quitamos publica -ponemos directivas y ya podemos recibir informacion desde el componente padre

  @Input() barChartLabels: Label[] = [
    // '2020', '2021', '2022', '2023', '2024', '2025', '2026'
    // comentamos para manterner la idea que son strings que recibe
  ];


  //este no lo voy a exponer a fuera por eso no le pongo en input
  public barChartType: ChartType = 'bar'; // apariencia de la grafica

  // tampoco expongo a fuera , siempre muestra la legend , a menos que queremos nosotros
  public barChartLegend = true; // pariencia de la etiqueta de arriba


  /* 3 series por cada label
   * cada seria lleva coleccion de valores para cada lebel
   * esta prop necesito qu reciba informacion desde a fuera
  */
  @Input() barChartData: ChartDataSets[] = [
   //{ data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Series A', backgroundColor: '#34FF74', hoverBackgroundColor: '#00E35D' },
   //{ data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Series B', backgroundColor: '#224EE0', hoverBackgroundColor: '#3D09E3' },
   //{ data: [ 8, 38, 70, 59, 66, 80, 100 ], label: 'Series C', backgroundColor: '#FA0727', hoverBackgroundColor: '#FA0014' },
  ];


  constructor() {
   // console.log(this.horizontal) - ambos en false porque todavia no tengo input , ciclo de vida de constructor
  }

  ngOnInit(): void { // este ciclo de vida se dispara despues de la resolucion del input pader->hijo
    console.log(this.horizontal)

    // pues bien redefino chart tipe por lomeno tenemos 2 tipos controlados en este caso
    if ( this.horizontal ){
      this.barChartType = 'horizontalBar';
    }


  }


  /* este accion nos esplica como actualizar la grafica cuando sucede algo en la applicacion
   * podemos hacer peticion http para traer nueva data ,cuando trae la nueva data ejecuta esta funcion , que va hacer la actualizacion igual
   * como hacer paraque se actualizaa en tiempo real ? - para hacerlo occupamos comprender concepto de websockets (curso de angular de los websockets)
     este cocepto es cuando cambia algo en back-end automaticamente cambia el front-end
   */
    /*  public randomize(): void {
      // Only Change 3 values
      this.barChartData[0].data = [ //serie 1
        Math.round( Math.random() * 100 ),
        Math.round( Math.random() * 100 ),
        Math.round( Math.random() * 100 ),
        Math.round( Math.random() * 100 ),
        Math.round( Math.random() * 100 ),
        Math.round( Math.random() * 100 ),
        Math.round( Math.random() * 100 ),
      ];

      this.barChartData[1].data = [ // serie 2
        Math.round( Math.random() * 100 ),
        Math.round( Math.random() * 100 ),
        Math.round( Math.random() * 100 ),
        Math.round( Math.random() * 100 ),
        Math.round( Math.random() * 100 ),
        Math.round( Math.random() * 100 ),
        Math.round( Math.random() * 100 ),
      ];

      this.barChartData[2].data = [ // serie 3
        Math.round( Math.random() * 100 ),
        Math.round( Math.random() * 100 ),
        Math.round( Math.random() * 100 ),
        Math.round( Math.random() * 100 ),
        Math.round( Math.random() * 100 ),
        Math.round( Math.random() * 100 ),
        Math.round( Math.random() * 100 ),
      ];
    } */


}






