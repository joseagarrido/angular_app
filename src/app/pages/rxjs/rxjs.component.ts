import { Component, OnInit } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { retry } from "rxjs/operators";

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnInit {

  constructor() { 
    


    this.retornaObsevable().pipe(
      retry(2)
    ).subscribe(
      valor => console.log(valor),
      error => console.log('error: ', error),
      () => console.log('terminado')
    );
  }

  ngOnInit(): void {
  }

  retornaInterval(){
    

  }

  retornaObsevable (){
    let i = -1;
    return new Observable<number>( observer =>{
      const intervalo = setInterval(() =>{
        i++;
        observer.next(i);

        if (i==4){
          clearInterval(intervalo);
          observer.complete;
        }

        if (i==2){
          i=0;
          observer.error('i=2');
        }

      })
    });


  }

}
