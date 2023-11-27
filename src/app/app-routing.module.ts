import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { OpcoesComponent } from './opcoes/opcoes.component';
import { AberturaChamadoComponent } from './abertura-chamado/abertura-chamado.component';
import { AcompanharChamadoComponent } from './acompanhar-chamado/acompanhar-chamado.component';
import { TabelaChamadosComponent } from './tabela-chamados/tabela-chamados.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { TabelaAcompanharChamadosComponent } from './tabela-acompanhar-chamados/tabela-acompanhar-chamados.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'opcoes/:id', component: OpcoesComponent},
  {path: 'chamados/:id', component: AberturaChamadoComponent},
  {path: 'acompanhar-chamados/:id/user/:userId', component: AcompanharChamadoComponent},
  {path: 'tabela/:id', component: TabelaChamadosComponent},
  {path: 'cadastro', component: CadastroComponent},
  {path: 'acompanhar-chamados/:id', component: TabelaAcompanharChamadosComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
