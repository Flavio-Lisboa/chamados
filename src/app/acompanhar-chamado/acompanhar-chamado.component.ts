import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-acompanhar-chamado',
  templateUrl: './acompanhar-chamado.component.html',
  styleUrls: ['./acompanhar-chamado.component.css']
})
export class AcompanharChamadoComponent implements OnInit {

  formAcompanharChamado: FormGroup = this.fb.group({
    numChamado: [''],
    comentario: [''],
    responderAtendente: [''],
    encerrarChamado: ['']
  })
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

}
