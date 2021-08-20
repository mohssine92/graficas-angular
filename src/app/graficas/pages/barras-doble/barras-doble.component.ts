import { Component } from '@angular/core';
import { ChartDataSets } from 'chart.js';

@Component({
  selector: 'app-barras-doble',
  templateUrl: './barras-doble.component.html',
  styles: [
  ]
})
export class BarrasDobleComponent  {

  proveedoresData: ChartDataSets[] = [
    { data: [ 100,200,300,400,500 ], label: 'Vendedor A' }, // los numeros del vendedor a en estos 5 años
    { data: [ 50,250,30, 450,200 ], label: 'Vendedor B' },
  ];

  proveedoresLabels: string[] = ['2021', '2022','2023','2024','2025']; // 5 años

  productoData: ChartDataSets[] = [
    { data: [ 200, 300,400,300, 100  ], label: 'Carros', backgroundColor: 'blue' }, // los carros vendidos en estos 5 años - el que se ve vacio esta en minimo lo toma como base
  ];

  /* encima podemos tener servicios que nos trae la data , asi cada servicio alementa algun prop
     estos prop seran pasados al respectivo componente usando concepto de inputs del padre al hijo
  */





}
/*
 ng g c  graficas/pages/barrasDoble --skip-tests -is
 - cuando queremos implementar grafica de barra simplemenbte copiar componente y pegar y pasar la data a las props expuestas del mismo y se cabo el asunto

*/
