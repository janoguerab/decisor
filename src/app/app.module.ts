import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Material
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatSnackBarModule,MatCardModule,MatToolbarModule,MatExpansionModule,MatIconModule,MatCheckboxModule,MatSliderModule,MatFormFieldModule,MatInputModule,MatStepperModule} from '@angular/material';

//Firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import{ AngularFireDatabaseModule} from 'angularfire2/database-deprecated';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { DecisorComponent } from './decisor/decisor.component';
import { DecisionesComponent } from './decisiones/decisiones.component';
import { PortadaComponent } from './portada/portada.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    DecisorComponent,
    DecisionesComponent,
    PortadaComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseconfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    FormsModule,
    MatIconModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatCardModule,
    MatSnackBarModule,
    MatInputModule,
    MatSliderModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatStepperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
