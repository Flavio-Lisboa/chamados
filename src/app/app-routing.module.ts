import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { OpcoesComponent } from './opcoes/opcoes.component';
import { AberturaChamadoComponent } from './abertura-chamado/abertura-chamado.component';
import { EncerrarChamadoComponent } from './encerrar-chamado/encerrar-chamado.component';
import { AcompanharChamadoComponent } from './acompanhar-chamado/acompanhar-chamado.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'opcoes', component: OpcoesComponent},
  {path: 'chamados', component: AberturaChamadoComponent},
  {path: 'encerrar-chamados', component: EncerrarChamadoComponent},
  {path: 'acompanhar-chamados', component: AcompanharChamadoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
