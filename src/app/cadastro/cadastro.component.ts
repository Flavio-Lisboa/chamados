import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';
import { finalize } from 'rxjs';

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
    telefone: ['', Validators.required],
    role: [false, Validators.required] 
  })

  constructor(private fb: FormBuilder, private service: ServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  post() {
    this.service.saveUser(this.form.value).pipe(
      finalize(() => {
        alert('Usuário criado com sucesso!');
        setTimeout(() => {
          this.router.navigate(['/login'])
        }, 1000);
      })
    ).subscribe();
  }

}
