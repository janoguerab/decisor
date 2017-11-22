import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { MatSliderChange } from '@angular/material';
import { Estado } from '../estado';
import { Opcion } from '../opcion';

@Component({
  selector: 'app-decisor',
  templateUrl: './decisor.component.html',
  styleUrls: ['./decisor.component.css']
})
export class DecisorComponent implements OnInit {

  alternativas:Opcion[]=[];
  isLinear = true;
  mejorOpcion:Opcion=new Opcion("",0);

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {

     }


  getBest(){
    for (let opcion of this.alternativas) {
      opcion.setGanancia();
      if(opcion.ganancia > this.mejorOpcion.ganancia){
        this.mejorOpcion = opcion;
      }
     }
  }

  update(value: string,gana: number) {
    let nuevaOpcion:Opcion=new Opcion(value,gana);
    if (gana==null){
      nuevaOpcion.gana=0;
    }
    if (gana!=0){
      nuevaOpcion.final=true;
    }
    if(value!=""){
      this.alternativas.push(nuevaOpcion);
    }
  }

  sucesoUpdate(opcion: Opcion, nombre:string,prob: number,gan: number){
    if (gan==null){
      gan=0;
    }
    if (prob==null) {
        prob=0.00;
    }
    if(nombre!=""){
      opcion.addEstado(new Estado(nombre,prob,gan));
    }
  }

  eliminar(alternativa: Opcion){
    var index = this.alternativas.indexOf(alternativa);
    if (index > -1) {
      this.alternativas.splice(index, 1);
    }
  }
  eliminarEstado(opc: Opcion,suceso: Estado){
  opc.delEstado(suceso);
  }

 removeAll(){
   this.alternativas=[];
  }

}
