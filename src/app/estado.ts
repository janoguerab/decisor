export class Estado {
  nombre: string;
  probabilidad: number;
  ganancia: number;

  constructor(nombre,probabilidad,ganancia) {
    this.nombre=nombre;
    this.probabilidad=probabilidad;
    this.ganancia=ganancia;
   }

  getEsperanza(){
    return this.probabilidad*this.ganancia;
  }
}
