import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from '../service.service';
import { finalize, tap } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup = this.fb.group({
    matricula: ['', Validators.required],
    senha: ['', Validators.required]
  })
  user: any;

  constructor(private fb: FormBuilder, private service: ServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    this.service.login(this.form.get('matricula')?.value).pipe(
      tap((res:any) => this.user = res),
      finalize(() => {
        if (this.user !== null) {
          this.router.navigate(['/opcoes', this.user.id ]);
        } else {
          alert('Esse usuário n ão existe');
        } 
      })
    ).subscribe();
  }
}
