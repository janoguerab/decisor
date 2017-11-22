import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { MatSliderChange,MatSnackBar } from '@angular/material';
import{ AngularFireDatabase,FirebaseListObservable} from 'angularfire2/database-deprecated';
import * as firebase from 'firebase/app';
import { Estado } from '../estado';
import { Opcion } from '../opcion';

@Component({
  selector: 'app-decisor',
  templateUrl: './decisor.component.html',
  styleUrls: ['./decisor.component.css']
})
export class DecisorComponent implements OnInit {

  decisiones: FirebaseListObservable<any[]>;

  alternativas:Opcion[]=[];
  isLinear = true;
  mejorOpcion:Opcion=new Opcion("",0);
  compuesto:Opcion=new Opcion("",0);

  constructor(public db: AngularFireDatabase,public snackBar: MatSnackBar) {
      this.decisiones = db.list('decisiones');
  }

  ngOnInit() {

     }

  openSnackBar(message: string) {
    this.snackBar.open(message, "Cerrar", {
      duration: 2000,
    });
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
      nuevaOpcion.ganancia=0;
    }
    if (gana!=0){
      nuevaOpcion.final=true;
    }
    if(value!=""){
      this.alternativas.push(nuevaOpcion);
    }
    this.openSnackBar("Nueva alternativa: " +value);
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
    this.openSnackBar("Nuevo suceso: " +nombre);
  }

  eliminar(alternativa: Opcion){
    var index = this.alternativas.indexOf(alternativa);
    if (index > -1) {
      this.alternativas.splice(index, 1);
      this.openSnackBar(alternativa.nombre+" fue borrada.");
    }
  }
  eliminarEstado(opc: Opcion,suceso: Estado){
  opc.delEstado(suceso);
  this.openSnackBar(suceso.nombre+" fue borrado.");
  }

 removeAll(){
   this.alternativas=[];
   this.openSnackBar("Todas las alternativas fueron borradas.!");
  }

  sCompuestoUpdate(nam:string,nom:string,probab: number,ganan: number){
    if (ganan==null){
      ganan=0;
    }
    if (probab==null) {
        probab=0.00;
    }
    if(nom!=""){
      this.compuesto.nombre=nam;
      this.compuesto.addEstado(new Estado(nom,probab,ganan));
    }
    this.openSnackBar("Nuevo suceso compuesto: " +nom);
  }

  sucesoCompuestoUpdate(opc: Opcion,name:string,pro: number){
    if (pro==null) {
        pro=0.00;
    }
    if(name!=""){
      opc.addEstado(new Estado(name,pro,this.compuesto.ganancia));
    }
    this.compuesto=new Opcion("",0);
    this.openSnackBar("Nuevo suceso: " +name);
  }

  enviarDecision(){
    this.decisiones.push({decision: this.mejorOpcion});
    this.mejorOpcion=new Opcion("",0);
  }
}
