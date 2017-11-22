import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
// for auth
import { AngularFireAuth } from 'angularfire2/auth';
// for database
import * as firebase from 'firebase/app';
//import { AngularFireDatabase } from 'angularfire2/database';
import { Estado } from '../estado';
import { Opcion } from '../opcion';

@Component({
  selector: 'app-decisiones',
  templateUrl: './decisiones.component.html',
  styleUrls: ['./decisiones.component.css']
})
export class DecisionesComponent implements OnInit {


user: Observable<firebase.User>;

  constructor(public afAuth: AngularFireAuth ) {
    this.user = afAuth.authState;
   }

   login() {
     this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
   }
   logout() {
     this.afAuth.auth.signOut();
   }

  ngOnInit() {
  }


}
