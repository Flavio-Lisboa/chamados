import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export interface Chamados {
  codigo: number,
  nome: string,
  titulo: string,
  criado: string,
  status: string,
  atendente: string
}
const CADASTRO_DATA: Chamados[] = [
  {codigo: 21, nome: 'João', titulo: 'Problemas', criado: '22/03/1998', status: 'ativo', atendente: 'Roberval'  },
  {codigo: 21, nome: 'João', titulo: 'Problemas', criado: '22/03/1998', status: 'ativo', atendente: 'Roberval'  }
];
@Component({
  selector: 'app-tabela-chamados',
  templateUrl: './tabela-chamados.component.html',
  styleUrls: ['./tabela-chamados.component.css']
})
export class TabelaChamadosComponent implements OnInit {
 
  displayedColumns: string[] = ['codigo', 'nome', 'titulo', 'criado', 'status', 'atendente'];
  dataSource = CADASTRO_DATA;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
