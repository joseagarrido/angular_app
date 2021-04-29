import { Component } from '@angular/core';
import { MultiDataSet, Label } from 'ng2-charts';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component  {

  public Label1: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public Data1: MultiDataSet = [
    [350, 450, 100]
  ];

  public Label2: Label[] = ['Download Compras', 'In-Store Compras', 'Mail-Order Compras'];
  public Data2: MultiDataSet = [
    [30, 40, 150]
  ];
  

 

}
