import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
    templateUrl:'heroe.component.html',
    styleUrls:['./heroe.component.css']
})
export class heroeComponent{
    public nombre:string='Ironman';
    public edad:number=50;

    get GetNombreCapitalizado(){
        return this.nombre.toUpperCase();
    }

    ObtenerNombre():string{
        //return this.nombre + '-' + this.edad.toString();
        //esta es otra manera de hacerlo
        return `Nombre: ${this.nombre} - ${this.edad}`
    }

    CambiarNombre():void{
        this.nombre='Emmanuel';
    }
    CambiarEdad():void{
        this.edad=16;
    }
}