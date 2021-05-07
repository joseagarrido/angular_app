import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: [
  ]
})
export class PromesasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.getUsuarios().then( usuarios => console.log(usuarios));
    // const promesa = new Promise((resolve,reject)=>{
    //   if (false) {
    //     resolve('hola mundo')
    //   } else {
    //     reject('esta mal')
    //   }

    // });

    // promesa.then((mensaje)=>{
    //   console.log(mensaje)
    // })
    // .catch (error => console.log(error));
    // console.log('fin codigo');
  }

  getUsuarios(){

    return new Promise(resolve =>{
       fetch('https://reqres.in/api/users?page=2')
    .then(resp => {
      resp.json().then( body => resolve(body.data))
    });
    });

  
   
  }

}
