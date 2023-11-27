import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { ActivatedRoute } from '@angular/router';
import { finalize, tap } from 'rxjs';

export interface Chamados {
  codigo: number,
  nome: string,
  titulo: string,
  criado: string,
  status: string,
  atendente: string
}

@Component({
  selector: 'app-tabela-acompanhar-chamados',
  templateUrl: './tabela-acompanhar-chamados.component.html',
  styleUrls: ['./tabela-acompanhar-chamados.component.css']
})
export class TabelaAcompanharChamadosComponent implements OnInit {

  displayedColumns: string[] = ['codigo', 'nome', 'titulo', 'criado', 'status', 'atendente'];
  dataSource: any;
  userId = this.route.snapshot.paramMap.get('id');
  user: any; 

  constructor(private service: ServiceService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.userData();
  }

  userData() {
    this.service.userData(this.route.snapshot.paramMap.get('id')).pipe(
      tap((res:any) => this.user = res),
      finalize(() => this.getAllChamadosByDepartamento())
    ).subscribe();
  }

  getAllChamadosByDepartamento() {
    this.service.chamadosByAtendenteDepartamento(this.user.departamento).pipe(
      tap((res:any) => this.dataSource = res)
    ).subscribe();
  }
}
