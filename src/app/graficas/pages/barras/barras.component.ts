import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';



// video 332
@Component({
  selector: 'app-barras',
  templateUrl: './barras.component.html',
  styles: [
  ]
})
export class BarrasComponent implements OnInit {

  public barChartOptions: ChartOptions = {
    responsive: true, // adapte al contenodor que tiene
  };
  public barChartLabels: Label[] = ['2020', '2021', '2022', '2023', '2024', '2025', '2026'];
  public barChartType: ChartType = 'bar'; // apariencia de la grafica
  public barChartLegend = true; // pariencia de la etiqueta de arriba


  /* 3 series por cada label
   * cada seria lleva coleccion de valores para cada lebel
  */
  public barChartData: ChartDataSets[] = [
    { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Series A', backgroundColor: '#34FF74', hoverBackgroundColor: '#00E35D' },
    { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Series B', backgroundColor: '#224EE0', hoverBackgroundColor: '#3D09E3' },
    { data: [ 8, 38, 70, 59, 66, 80, 100 ], label: 'Series C', backgroundColor: '#FA0727', hoverBackgroundColor: '#FA0014' },
  ];

  constructor() { }

  ngOnInit(): void {
  }



  /* este accion nos esplica como actualizar la grafica cuando sucede algo en la applicacion
   * podemos hacer peticion http para traer nueva data ,cuando trae la nueva data ejecuta esta funcion , que va hacer la actualizacion igual
   * como hacer paraque se actualizaa en tiempo real ? - para hacerlo occupamos comprender concepto de websockets (curso de angular de los websockets)
     este cocepto es cuando cambia algo en back-end automaticamente cambia el front-end
   */
  public randomize(): void {
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
  }

}
