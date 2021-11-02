import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls:['./listado.component.css']
})
export class ListadoComponent  {
  heroes:string[]=['El Zorro','Superman','El llanero','Spiderman','Batman'];  
  heroeBorrado:string='';

  borrarHeroe():void{
    this.heroeBorrado= this.heroes.shift() || 'no hay más pa borrar';
  }
  reestablecer():void{
    this.heroes=['El Zorro','Superman','El llanero','Spiderman','Batman'];  
  }
}
