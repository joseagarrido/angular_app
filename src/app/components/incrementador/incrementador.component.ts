import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent  {

  @Input() progreso: number =50;
  @Input() btnClass: string ='btn btn-primary';
  @Output() valor : EventEmitter<number> = new EventEmitter();
  
  

  cambiarProgreso ( valor: number): number {
    if (this.progreso >=100 && valor >= 0){
      this.progreso=100;
    } else if (this.progreso <=0 && valor <= 0){
      this.progreso=0;
    } else {
      this.progreso = this.progreso+valor;
    }
    this.valor.emit(this.progreso);
    return this.progreso;
     
  }

  onChange (cambiado : number){
    if (cambiado>100){
      this.progreso=100
    } else if (cambiado<0){
      this.progreso=0
    } else {
     this.progreso=cambiado; 
    } 
    this.valor.emit(this.progreso);
  }

}
