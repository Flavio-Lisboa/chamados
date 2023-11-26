import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-acompanhar-chamado',
  templateUrl: './acompanhar-chamado.component.html',
  styleUrls: ['./acompanhar-chamado.component.css']
})
export class AcompanharChamadoComponent implements OnInit {

  formAcompanharChamado: FormGroup = this.fb.group({
    titulo: [''],
    nomeUsuario: [''],
    descricao: [''],
    dataCriacao: ['', Validators.required],
    status: [''],
    atendente: [''],
    telUsuario: ['']
  })
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

}
