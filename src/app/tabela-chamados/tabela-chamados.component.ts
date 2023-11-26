import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { tap } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

export interface Chamados {
  codigo: number,
  nome: string,
  titulo: string,
  criado: string,
  status: string,
  atendente: string
}

@Component({
  selector: 'app-tabela-chamados',
  templateUrl: './tabela-chamados.component.html',
  styleUrls: ['./tabela-chamados.component.css']
})
export class TabelaChamadosComponent implements OnInit {
 
  displayedColumns: string[] = ['codigo', 'nome', 'titulo', 'criado', 'status', 'atendente'];
  dataSource: any;
  userId = this.route.snapshot.paramMap.get('id');

  constructor(private service: ServiceService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getUserChamados();
  }

  getUserChamados() {
    this.service.getUserChamados(this.userId).pipe(
      tap((res:any) => this.dataSource = res)
    ).subscribe();
  }
}
