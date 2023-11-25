import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-encerrar-chamado',
  templateUrl: './encerrar-chamado.component.html',
  styleUrls: ['./encerrar-chamado.component.css']
})
export class EncerrarChamadoComponent implements OnInit {

  formEncerrar: FormGroup = this.fb.group({
    numChamado: [''],
    chamadoIncorreto: [''],
    chamadoJaResolvido: [''],
    comentario: ['']
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  emitir() {
    console.log(this.formEncerrar.value);
  }

}
