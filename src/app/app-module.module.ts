import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; // Importe o HttpClientModule
import { PessoasService } from './pessoa.service';  // Importe seu serviço
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { PessoasComponent } from './components/pessoas/pessoas.component';
import { AppComponent } from './app.component';
import { FormGroup } from '@angular/forms';
import { AppRoutingModule } from './app.routes';



@NgModule({
  declarations: [

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormControl,
    FormsModule,
    AppRoutingModule,
    CommonModule,
    NgFor,
    NgIf

    ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  providers: [
    PessoasService,// Registre seu serviço aqui
    PessoasComponent,
    AppComponent,
    FormGroup,
    AppModule,
    
  ],
  bootstrap: []
})
export class AppModule { }
