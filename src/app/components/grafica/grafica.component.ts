import { Component, Input } from '@angular/core';
import { Label, MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'app-grafica',
  templateUrl: './grafica.component.html',
  styles: [
  ]
})
export class GraficaComponent  {

  @Input() doughnutChartLabels: Label[] = ['prueba'];
  @Input() doughnutChartData: MultiDataSet = [[100]];
  @Input() titulo: String = 'prueba';

}
