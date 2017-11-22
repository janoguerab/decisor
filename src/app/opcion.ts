import { Estado } from './estado';
export class Opcion {
  nombre: string;
  ganancia: number;
  estados: Estado[]=[];
  final:boolean=false;

  constructor(nombre,ganancia) {
    this.nombre=nombre;
    this.ganancia=ganancia;
   }

   setGanancia(){
     if (!this.final){
       let g=0;
       for (let estado of this.estados) {
         g += estado.getEsperanza();
       }
       this.ganancia=g;
     }
   }

   addEstado(estado){
     this.estados.push(estado);
     this.setGanancia();
   }
   delEstado(suceso){
     var i = this.estados.indexOf(suceso);
     if (i > -1) {
       this.estados.splice(i, 1);
     }
   }
}
