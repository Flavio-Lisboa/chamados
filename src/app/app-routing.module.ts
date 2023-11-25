import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { OpcoesComponent } from './opcoes/opcoes.component';
import { AberturaChamadoComponent } from './abertura-chamado/abertura-chamado.component';
import { AcompanharChamadoComponent } from './acompanhar-chamado/acompanhar-chamado.component';
import { TabelaChamadosComponent } from './tabela-chamados/tabela-chamados.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'opcoes', component: OpcoesComponent},
  {path: 'chamados', component: AberturaChamadoComponent},
  {path: 'acompanhar-chamados/:id', component: AcompanharChamadoComponent},
  {path: 'tabela', component: TabelaChamadosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
