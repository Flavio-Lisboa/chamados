import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { LoginComponent } from './login/login.component';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon'
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import { ReactiveFormsModule } from '@angular/forms';
import { OpcoesComponent } from './opcoes/opcoes.component';
import { AberturaChamadoComponent } from './abertura-chamado/abertura-chamado.component';
import { AcompanharChamadoComponent } from './acompanhar-chamado/acompanhar-chamado.component';

import { EditorModule } from '@tinymce/tinymce-angular';
import { TabelaChamadosComponent } from './tabela-chamados/tabela-chamados.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    OpcoesComponent,
    AberturaChamadoComponent,
    AcompanharChamadoComponent,
    TabelaChamadosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
    EditorModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
