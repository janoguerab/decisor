import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Material
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatSnackBarModule,MatCardModule,MatToolbarModule,MatExpansionModule,MatIconModule,MatCheckboxModule,MatSliderModule,MatFormFieldModule,MatInputModule,MatStepperModule} from '@angular/material';

import { AppComponent } from './app.component';
import { DecisorComponent } from './decisor/decisor.component';

@NgModule({
  declarations: [
    AppComponent,
    DecisorComponent
  ],
  imports: [
    BrowserModule,
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
