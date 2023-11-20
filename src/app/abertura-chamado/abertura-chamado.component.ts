import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-abertura-chamado',
  templateUrl: './abertura-chamado.component.html',
  styleUrls: ['./abertura-chamado.component.css']
})
export class AberturaChamadoComponent implements OnInit {

  formChamados: FormGroup = this.fb.group({
    solicitante: ['', Validators.required],
    departamento: ['', Validators.required],
    titulo: [''],
    descChamado: [''],
    numChamado: []
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  emitir() {
    console.log(this.formChamados.value);
  }
}
