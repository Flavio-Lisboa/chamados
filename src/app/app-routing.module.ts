import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { OpcoesComponent } from './opcoes/opcoes.component';
import { AberturaChamadoComponent } from './abertura-chamado/abertura-chamado.component';
import { AcompanharChamadoComponent } from './acompanhar-chamado/acompanhar-chamado.component';
import { TabelaChamadosComponent } from './tabela-chamados/tabela-chamados.component';
import { CadastroComponent } from './cadastro/cadastro.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'opcoes/:id', component: OpcoesComponent},
  {path: 'chamados', component: AberturaChamadoComponent},
  // {path: 'acompanhar-chamados/:id', component: AcompanharChamadoComponent},
  {path: 'acompanhar-chamados', component: AcompanharChamadoComponent},
  {path: 'tabela', component: TabelaChamadosComponent},
  {path: 'cadastro', component: CadastroComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
