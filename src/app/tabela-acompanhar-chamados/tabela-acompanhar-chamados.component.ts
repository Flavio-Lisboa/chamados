import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
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
  selector: 'app-tabela-acompanhar-chamados',
  templateUrl: './tabela-acompanhar-chamados.component.html',
  styleUrls: ['./tabela-acompanhar-chamados.component.css']
})
export class TabelaAcompanharChamadosComponent implements OnInit {

  displayedColumns: string[] = ['codigo', 'nome', 'titulo', 'criado', 'status', 'atendente'];
  dataSource: any;

  constructor(private service: ServiceService, private route: ActivatedRoute) { }


  ngOnInit(): void {
  }

}
