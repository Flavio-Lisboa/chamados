import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from '../service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { finalize, tap } from 'rxjs';

@Component({
  selector: 'app-abertura-chamado',
  templateUrl: './abertura-chamado.component.html',
  styleUrls: ['./abertura-chamado.component.css']
})
export class AberturaChamadoComponent implements OnInit {

  formChamado: FormGroup = this.fb.group({
    solicitante: [{value: '', disabled: true}],
    solicitanteId: [''],
    departamento: ['', Validators.required],
    titulo: ['', Validators.required],
    descricao: ['', Validators.required]
  });

  user: any;
  isLoading = true;
  
  constructor(private fb: FormBuilder, private service: ServiceService, private route: ActivatedRoute, private router: Router) {     this.userData();
  }

  ngOnInit(): void {
  }

  userData() {
    this.service.userData(this.route.snapshot.paramMap.get('id')).pipe(
      tap((res:any) => this.user = res),
      finalize(() => {  
         this.isLoading = false;
         this.formChamado.patchValue({
          solicitante: this.user.nome,
          solicitanteId: this.user.id
         })
      })  
    ).subscribe();
  }

  salvar() {
    this.service.saveChamado(this.formChamado.value).pipe(
      finalize(() => {
        alert('Chamado criado com sucesso!');
        setTimeout(() => {
          this.router.navigate(['/tabela', this.user.id])
        }, 1000);
      })
    ).subscribe();
  }
}
