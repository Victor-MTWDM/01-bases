import {Component} from '@angular/core';

@Component({
    selector:'app-contador',
    templateUrl:'./contador.component.html',
    styleUrls:['./contador.component.css']
})

export class ContadorComponent{
    public titulo:string = 'Contador App';
    public numero:number=0;
    public base:number=5;
    acumular(valor:number){
      this.numero+=valor;
    };
}