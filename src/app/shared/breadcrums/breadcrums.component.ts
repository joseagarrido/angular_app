import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrums',
  templateUrl: './breadcrums.component.html',
  styles: [
  ]
})
export class BreadcrumsComponent implements OnInit, OnDestroy {

  public titulo: string ='';
  public tituloSub$ : Subscription;

  constructor(private router:Router) { 

    this.tituloSub$ = this.getRuta()

  }
  ngOnDestroy(): void {
    this.tituloSub$.unsubscribe();
  }

  getRuta(): Subscription {

   return this.router.events
    .pipe(
      filter( event => event instanceof ActivationEnd),
      filter( event => (event as ActivationEnd).snapshot.firstChild === null),
      map( value => (value as ActivationEnd).snapshot.data )
    ).subscribe(({titulo}) =>{
      this.titulo=titulo;
      document.title=`AdminPro - ${titulo}`;
    });
    

    
  }

  ngOnInit(): void {
  }

}
