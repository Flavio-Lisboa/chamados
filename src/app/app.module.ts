import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { LoginComponent } from './login/login.component';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon'
import {MatChipsModule} from '@angular/material/chips';
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
import { HttpClientModule } from '@angular/common/http';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { CadastroComponent } from './cadastro/cadastro.component';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { TabelaChamadosComponent } from './tabela-chamados/tabela-chamados.component';
import { TabelaAcompanharChamadosComponent } from './tabela-acompanhar-chamados/tabela-acompanhar-chamados.component';

export const options: Partial<null|IConfig> | (() => Partial<IConfig>) = null;

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    OpcoesComponent,
    AberturaChamadoComponent,
    AcompanharChamadoComponent,
    TabelaChamadosComponent,
    CadastroComponent,
    TabelaAcompanharChamadosComponent
  ],
  imports: [
    NgxMaskModule.forRoot(),
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
    HttpClientModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatChipsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
