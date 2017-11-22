import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
// for auth
import { AngularFireAuth } from 'angularfire2/auth';
// for database
//import { AngularFireDatabase } from 'angularfire2/database';
import{ AngularFireDatabase,FirebaseListObservable} from 'angularfire2/database-deprecated';
import * as firebase from 'firebase/app';
import { Estado } from '../estado';
import { Opcion } from '../opcion';

@Component({
  selector: 'app-decisiones',
  templateUrl: './decisiones.component.html',
  styleUrls: ['./decisiones.component.css']
})
export class DecisionesComponent implements OnInit {

  items: FirebaseListObservable<any[]>;
  name: any;
  decision: Opcion=new Opcion("",0);
user: Observable<firebase.User>;

  constructor(public db: AngularFireDatabase,public afAuth: AngularFireAuth ) {
    this.items = db.list('items');
    this.user = afAuth.authState;
   }

   login() {
     this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
   }
   logout() {
  this.afAuth.auth.signOut();
}

   enviarDecision(miDecision: Opcion){
     this.items.push({decitions: miDecision});
     this.decision=new Opcion("",0);
   }

  ngOnInit() {
  }


}
