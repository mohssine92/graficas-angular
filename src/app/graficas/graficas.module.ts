import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


// router del modulo
import { GraficasRoutingModule } from './graficas-routing.module';

// modules de graficas - v331 - solucionar warning
import { ChartsModule } from 'ng2-charts';


// componentes pages
import { BarrasComponent } from './pages/barras/barras.component';
import { BarrasDobleComponent } from './pages/barras-doble/barras-doble.component';
import { DonaComponent } from './pages/dona/dona.component';
import { DonaHttpComponent } from './pages/dona-http/dona-http.component';

// compònente
import { GraficaBarraComponent } from './components/grafica-barra/grafica-barra.component';





@NgModule({
  declarations: [
    BarrasComponent,
    BarrasDobleComponent,
    DonaComponent,
    DonaHttpComponent,
    GraficaBarraComponent
  ],
  imports: [
    CommonModule,
    GraficasRoutingModule,
    ChartsModule
  ]
})
export class GraficasModule { }


/* ng g  m graficas --routing

*/
