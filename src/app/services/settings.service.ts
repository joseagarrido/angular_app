import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  public linkTheme = document.querySelector('#theme');

  constructor() { 

    const url =localStorage.getItem('theme');
    if (url!= null){
      this.linkTheme?.setAttribute('href',url);
  }
}

changeTheme (theme : string){
    
  const url =`./assets/css/colors/${theme}.css`;
  this.linkTheme?.setAttribute('href',url);
  localStorage.setItem('theme', url);
  this.currentTheme();

}

currentTheme(){
  const links = document.querySelectorAll('.selector'); 
  links.forEach( elemento => {
    elemento.classList.remove('working');
    const btnTema = elemento.getAttribute('data-theme');
    const btnTemaurl =`./assets/css/colors/${btnTema}.css`;
    const actualTemaurl = this.linkTheme?.getAttribute('href');
    if (btnTemaurl===actualTemaurl){
      elemento.classList.add('working');
    }
  });

}
}
