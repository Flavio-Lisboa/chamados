import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  form: FormGroup = this.fb.group({
    nome: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
    departamento: ['', Validators.required],
    telefone: ['', Validators.required]
  })

  constructor(private fb: FormBuilder, private service: ServiceService, private router: Router) { }

  ngOnInit(): void {
  }

}
